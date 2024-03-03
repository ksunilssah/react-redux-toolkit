import React from 'react';
import Counter from './components/features/counter';
// import Pokemon from './components/features/pokemon';
import PokmonAsync from './components/features/pokemon/pokemonAsync';

const App = () => (
  <div className="container">
    <h1>Redux Toolkit example</h1>
    <Counter />
    <PokmonAsync />
  </div>
);
export default App;
