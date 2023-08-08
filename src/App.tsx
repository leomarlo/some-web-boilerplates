// App.tsx

import React from 'react';

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello from the App Component!</h1>
            <button onClick={() => window.location.href='/wiki/index.php'}>Go to Wiki</button>
        </div>
    );
}

export default App;
