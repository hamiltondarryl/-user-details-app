import React, { useState } from 'react';
import './App.css';

import UserDetails from './components/UserDetails';

function App() {
  const [userId, setUserId] = useState(1);
  return (
    <div className="App">
        <h1>Détails de l'utilisateur</h1>
        <UserDetails userId={userId}></UserDetails>
    </div>
  );
}

export default App;
