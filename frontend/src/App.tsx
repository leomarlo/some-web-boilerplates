// App.tsx

import React from 'react';
import Article from './content/Article';

const App: React.FC = () => {
    const handleButtonClick = async () => {
        try {
          const response = await fetch("http://localhost:5000/button-endpoint", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
    
          if(response.ok) {
            const data = await response.json();
            alert(data.message); // Display the message from the backend
          } else {
            console.error("Failed to run script.");
          }
        } catch (error) {
          console.error("There was an error:", error);
        }
      }

    return (
        <div>
            <h1>Another Title</h1>
            <button onClick={() => window.location.href='/wiki/index.php'}>Go to Wiki</button>
            <button onClick={handleButtonClick}>Check Flask</button>
            <br />
            <div>
              Hallo
            </div>
            <Article />
        </div>
    );
}

export default App;
