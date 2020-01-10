import React from 'react';
import './App.css';
import Counter from "./Counter.component";
import InputMirror from "./InputMirror";
import {counterStore} from "./redux/counter/counter-store";
import {store} from "./redux/input-mirror/input-store";

function App() {
  return (
    <div className="App">
      <Counter store={counterStore}/>
      <InputMirror store={store}/>
    </div>
  );
}

export default App;
