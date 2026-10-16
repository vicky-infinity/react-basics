// This file extracts text from the uploaded document.
// The output is a single plain text string containing the resume content.
// This extracted text is later sent to the LLM along with the selected job title and JD.

import * as pdfjs from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import mammoth from "mammoth/mammoth.browser";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export async function extractDocumentText(file) {
  if (!file) {
    throw new Error("Please select a document.");
  }

  const extension = file.name.split(".").pop()?.toLowerCase();
  const arrayBuffer = await file.arrayBuffer();

  if (extension === "pdf") {
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const pages = [];

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      pages.push(content.items.map((item) => item.str ?? "").join(" "));
    }

    return pages.join("\n").trim();
  }

  if (extension === "docx") {
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value.trim();
  }

  throw new Error("Unsupported file type. Please upload a PDF or DOCX file.");
}