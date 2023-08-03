import './App.css';
import React from 'react';
import { Create } from './poke/createPokemon';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='conteiner'>
        <Create />
      </div>
    </div>
  );
}

export default App;


/*  fetchData().then((data)=>{
    data.results.map((dados)=>(
      console.log(dados)
    ))
  })*/