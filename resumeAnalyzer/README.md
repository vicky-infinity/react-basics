# Resume Analyzer

A React application that extracts text from PDF and DOCX resumes and compares it with a job description using an Ollama chat model. The app displays candidate contact details, a match score, a preliminary status recommendation, and a short skills analysis.

> The generated status is an AI-assisted recommendation for human review. It is not a hiring decision.

## Features

- Upload a PDF or DOCX resume and extract its text in the browser.
- Enter a job description and select a job title.
- Request a structured JSON analysis from the configured Ollama model.
- Review candidate details, match score, and status in a results table.
- Open a popup to read the summary and matching or missing skills.
- Show file extraction and analysis request errors in the form.

## Requirements

- Node.js and npm
- An Ollama API key with access to the model configured in `src/llmClient.js` (`gpt-oss:120b-cloud` by default)

## Getting started

From this directory, install dependencies:

```bash
npm install
```

Create a `.env` file in the `resumeAnalyzer` directory and add your API key:

```env
VITE_APIKEY=your_ollama_api_key
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite. Restart the server after changing `.env`.

## Using the app

1. Upload a `.pdf` or `.docx` resume.
2. Review the extracted text shown in the form.
3. Paste the job description and choose the job title.
4. Select **Submit** and wait for the analysis.
5. Review the candidate row and select **Analysis** for the summary and skill comparison.

The prompt asks the model to score explicit required qualifications equally, award partial credit for partial evidence, and avoid treating missing resume evidence as proof that a qualification is absent. The status is `Selected` at a score of 70 or higher and `Rejected` below 70. Skills listed in the job description without resume evidence are returned as missing, including preferred skills.

## Request and data flow

```text
PDF/DOCX upload
      |
      v
docTextExtractor.jsx (PDF.js / Mammoth)
      |
      v
resumeForm.jsx builds the prompt
      |
      v
llmClient.js -> /ollama/api/chat
      |
      v
Vite development proxy adds the API key
      |
      v
Results table -> analysis popup
```

Resume extraction runs in the browser. The extracted resume text and job description are sent to Ollama for analysis.

## Project structure

| File | Purpose |
| --- | --- |
| `src/main.jsx` | React application entry point and global stylesheet import. |
| `src/App.jsx` | Renders the resume form. |
| `src/resumeForm.jsx` | File selection, form state, prompt construction, API call, and results rendering. |
| `src/docTextExtractor.jsx` | Extracts plain text from PDF and DOCX files. |
| `src/llmClient.js` | Sends a non-streaming JSON chat request to the local proxy endpoint. |
| `src/resuletTable.jsx` | Shows candidate results and opens the analysis popup. |
| `src/popupAnalysis.jsx` | Displays the summary and matching/missing skills. |
| `src/index.css` | Global page defaults and shared form-control font. |
| `src/resumeForm.css` | Form, table, popup, responsive, and motion styles. |
| `vite.config.js` | Development proxy configuration for Ollama. |
| `LLM_SETUP.md` | Additional notes about configuring and integrating the LLM. |

## Available scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the production assets
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## API key and deployment

Vite reads `VITE_APIKEY` in `vite.config.js` and adds it as a Bearer authorization header when proxying `/ollama` requests to `https://ollama.com`. The React client calls the same-origin `/ollama/api/chat` endpoint and does not read the key directly.

This proxy exists only in the Vite development server. A production deployment needs a server-side endpoint or proxy that stores the API key securely and forwards requests to Ollama. Do not expose a private API key in client-side code or commit `.env`.

## Analysis response

The model is asked to return JSON with these fields:

```json
{
  "name": null,
  "email": null,
  "phone": null,
  "matchScore": 0,
  "status": "Rejected",
  "summary": "",
  "matchingSkills": [],
  "missingSkills": []
}
```

Contact fields may be `null`; skill fields are arrays of strings. The form parses the model response as JSON and displays a request error if the call or parsing fails.
