// pages/api/deepseek.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ message: 'Prompt is required' });
    }

    try {
        const response = await axios.post(
        DEEPSEEK_API_URL,
        {
            model: 'deepseek-chat',
            messages: [{ role: 'user', content: prompt }],
            stream: false,
        },
        {
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
            },
        }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error communicating with DeepSeek API:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
