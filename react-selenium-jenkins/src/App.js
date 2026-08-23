import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setMessage(`You entered: ${text}`);
  };

  return (
    <div className="App">
      <h1>Simple React Test App</h1>
      <input
        type="text"
        data-testid="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button data-testid="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      <p data-testid="output-message">{message}</p>
    </div>
  );
}

export default App;
