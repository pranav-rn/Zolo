// src/services/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // Add to .env

export async function getGeminiResponse(prompt: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
