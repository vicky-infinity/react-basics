export async function callLLM(prompt) {
  const response = await fetch("/ollama/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-oss:120b-cloud",
      messages: [{ role: "user", content: prompt }],
      format: "json",
      options: { temperature: 0 },
      stream: false,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Ollama request failed.");
  }

  return data?.message?.content || "No answer received.";
}