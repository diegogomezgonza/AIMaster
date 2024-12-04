// src/api.js
export const getHelloMessage = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/hello');
    const data = await response.json();
    return data;
  };
  