# Ollama LLM Integration

## Overview

The application uses Ollama's hosted chat API to generate a response from a text
prompt. React calls a small helper, while Vite's development server forwards the
request to Ollama and adds the API key. Keeping the key out of the React request
avoids sending it directly from the browser and lets the browser use a same-origin
URL.

The temporary Search test UI has been removed. The resume form now sends the extracted
resume text, job description, and selected job title to the LLM. The response is
requested as JSON and displayed in the results table.

## Request Flow

1. A React component imports `callLLM` from `src/llmClient.js` and passes it a prompt.
2. The helper sends a `POST` request to `/ollama/api/chat` with the model, prompt,
   JSON response format, and `stream: false`.
3. Vite's proxy rewrites `/ollama/api/chat` to Ollama's `/api/chat` endpoint and adds
	the Bearer authorization header using the local environment variable.
4. Ollama returns the analysis as JSON text. The form parses it and displays request
	errors if the call or parsing fails.
5. `src/resuletTable.jsx` displays the candidate details and analysis.

## Files and Responsibilities

| File | Responsibility |
| --- | --- |
| `.env` | Stores the local Ollama API key as `VITE_APIKEY`. Do not commit the real key. |
| `vite.config.js` | Loads the local key and configures the `/ollama` development proxy. |
| `src/llmClient.js` | Sends the chat request and returns the model's JSON response as text. |
| `src/docTextExtractor.jsx` | Extracts plain text from uploaded PDF and DOCX files. |
| `src/resumeForm.jsx` | Collects input, builds the prompt, calls the LLM, and displays loading and error states. |
| `src/resuletTable.jsx` | Displays candidate details, match score, status, and an Analysis button. |
| `src/popupAnalysis.jsx` | Shows the summary and skill comparison in a simple popup. |

## Local Configuration

Add the key to the project-root `.env` file:

```env
VITE_APIKEY=your_ollama_api_key
```

Restart the Vite development server after changing `.env`. The current model is
`gpt-oss:120b-cloud`; update the model value in `src/llmClient.js` if needed.

> `VITE_` variables can be exposed to browser code when accessed through
> `import.meta.env`. The current implementation reads this value in Vite's server
> configuration only. Do not read the key from React code; consider using a
> server-only name such as `OLLAMA_API_KEY` in a later cleanup.

## Calling the Helper

```js
import { callLLM } from "./llmClient.js";

const responseText = await callLLM("Explain what a data analyst does.");
const answer = JSON.parse(responseText);
```

The helper returns JSON as text. The caller parses it, handles errors, and stores the
result in React state for display.

## Resume Analysis Flow

PDF and DOCX text extraction runs when a file is selected. On submit, the form:

1. Checks that resume text and a job description are present.
2. Builds a prompt from the resume text, JD, selected title, and required JSON structure.
3. Calls `callLLM` and parses the returned JSON.
4. Displays name, email, phone, match score, and status in the table. The Analysis
	button opens the summary and skill comparison in a popup.

The expected response fields are `name`, `email`, `phone`, `matchScore`, `status`,
`summary`, `matchingSkills`, and `missingSkills`. `status` must be `Selected` or
`Rejected`. Missing contact details should be `null`; skill fields should be arrays
of strings. The status is an AI-generated recommendation and requires human review.

The job description provides the role requirements, so a separate list of role skills
does not need to be sent.

## Deployment Note

The proxy in `vite.config.js` is for local development. A deployed application needs
a server-side proxy or backend endpoint that securely stores the API key and forwards
requests to Ollama. Do not put a private API key in client-side code.