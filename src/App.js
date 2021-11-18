
import './App.css';
import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import Tindercard from "./TinderCards.js";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
       
      <header className="App-header">
     
        <Tindercard />
       
        <div style={{ marginTop:"700px"}}>
        {count > 10 &&  <p>Σιγά ρε θα στραβοψωλιάσεις</p>}
        <Button onClick={() => setCount(count + 1)} variant="primary">Ρίξε μια Πούτσα</Button>{' '}
        <p>Έριξες {count} πούτσες</p>
        
        
    
  
       
        
          </div>
       
      </header>
    </div>
  );
}

export default App;
