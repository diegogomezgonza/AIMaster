import React, { useEffect, useState } from 'react';
import { getHelloMessage } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getHelloMessage().then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>React + Flask</h1>
      <p>Mensaje desde el backend: {message}</p>
    </div>
  );
}

export default App;
