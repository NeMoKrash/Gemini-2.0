import { useEffect, useState } from 'react';
import './App.css';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY,});

function App() {
  const [answer, setAnswer] = useState('');
  const [items, setItems] = useState(() => {
    // Чтение из localStorage при первом рендере
    const stored = localStorage.getItem('items');
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Ошибка при чтении localStorage:', e);
      return [];
    }
  });
  const [inputValue, setInputValue] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function main(question) {
    setAnswer('');
    setIsLoading(true);
    setCurrentQuestion(question);

    try {
      const response = await ai.models.generateContentStream({
        model: 'gemini-2.0-flash',
        contents: question,
      });

      let fullAnswer = '';
      for await (const chunk of response) {
        fullAnswer += chunk.text;
        setAnswer((prev) => prev + chunk.text);
      }

      // Добавляем вопрос и ответ в историю
      setItems((prevItems) => [...prevItems, { question, answer: fullAnswer }]);
    } catch (err) {
      console.error('Ошибка при получении ответа от ИИ:', err);
      setAnswer('Произошла ошибка при обработке запроса.');
    }

    setIsLoading(false);
    setCurrentQuestion(null);
  }

  function handleClick() {
    const question = inputValue.trim();
    if (question === '') {
      console.log('Поле пустое');
      return;
    }

    main(question);
    setInputValue('');
  }

  // Сохраняем items в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <div className="history">
        <h3>История запросов:</h3>

        {items.map((item, index) => (
          <div key={index} className="qa-item">
            <p><strong>Вопрос:</strong> {item.question}</p>
            <p><strong>Ответ:</strong> {item.answer}</p>
            <hr />
          </div>
        ))}

        {isLoading && currentQuestion && (
          <div className="qa-item">
            <p><strong>Вопрос:</strong> {currentQuestion}</p>
            <p><strong>Ответ:</strong> {answer}<span className="blinking-cursor">|</span></p>
          </div>
        )}
      </div>

      <div className="input-section">
        <input
          id="question"
          placeholder="Введите вопрос..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
        />
        <button onClick={handleClick} disabled={isLoading}>
          {isLoading ? 'Ожидайте...' : 'Спросить'}
        </button>
      </div>
    </div>
  );
}

export default App;
