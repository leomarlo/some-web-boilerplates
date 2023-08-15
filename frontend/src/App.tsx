// App.tsx

import React from 'react';
import Article from './content/Article';
import { BACKEND_URL } from './utils/global';

const App: React.FC = () => {
  const handleButtonClick = async () => {
    try {
      const path = 'button-endpoint';
      const response = await fetch(BACKEND_URL + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Display the message from the backend
      } else {
        console.error('Failed to run script.');
      }
    } catch (error) {
      console.error('There was an errorrr:', error);
    }
  };

  return (
    <div>
      <h1>Another Title</h1>
      <button onClick={() => (window.location.href = '/wiki/index.php')}>
        Go to Wiki
      </button>
      <button onClick={handleButtonClick}>Check Flask..!!</button>
      <br />
      <div>Hallo</div>
      <Article />
    </div>
  );
};

export default App;
