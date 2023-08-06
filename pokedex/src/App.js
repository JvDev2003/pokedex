import './App.css';
import React from 'react';
import { Create } from './poke/createPokemon';

document.querySelector('button')

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
        <Create />
    </div>
  );
}

export default App;