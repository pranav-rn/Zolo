import axios from "axios";

const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";
const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;

export async function getDeepSeekResponse(prompt: string): Promise<string> {
  try {
    const response = await axios.post(
      DEEPSEEK_API_URL,
      {
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        stream: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    throw new Error("Failed to get response from DeepSeek. Please try again.");
  }
}
