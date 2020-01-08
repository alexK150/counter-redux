import React from 'react';
import './App.css';
import Counter from "./Counter.component";

function App() {
  return (
    <div className="App">
      <Counter count={5}/>
    </div>
  );
}

export default App;
