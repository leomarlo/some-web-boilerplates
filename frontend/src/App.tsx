// App.tsx

import React from 'react';
import Article from './content/Article';
import { BACKEND_URL, DOCKER_MODE, DEVELOPMENT_MODE, REVERSE_PROXY } from './utils/global';

const App: React.FC = () => {

  const informationButtonClick = async () => {
    let devMode = process.env.REACT_APP_DEVELOPMENT_MODE;
    if (devMode === undefined) {
      alert('Local development environment');
    } else if (devMode === 'development') {
      alert('Dockerized development environment set up');
    } else if (devMode === 'production') {
      alert('Production environment');
    } else {
      alert('Unknown environment');
    }
  }

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
      <h1>Another Title!</h1>
      <button onClick={() => (window.location.href = '/wiki/index.php')}>
        Go to Wiki
      </button>
      <br />
      <button onClick={handleButtonClick}>Check Flask..!!</button>
      <br />
      <button onClick={informationButtonClick}>Some Info</button>
      <br />
      <Article />

    </div>
  );
};

export default App;
