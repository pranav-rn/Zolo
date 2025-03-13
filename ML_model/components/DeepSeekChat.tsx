// components/DeepSeekChat.tsx
import { useState } from 'react';
import axios from 'axios';

const DeepSeekChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/deepseek', { prompt: input });
      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default DeepSeekChat;
