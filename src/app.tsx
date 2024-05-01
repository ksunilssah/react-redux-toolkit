import React from 'react';
import Counter from './components/features/counter';
// import Pokemon from './components/features/pokemon';
import PokmonAsync from './components/features/pokemon/pokemonAsync';
import ToDoList from './components/to-do-list';
import Tabs from './components/tabs';
import SongsAndMovies from './components/songs-movies';
const App = () => (
  <div className="container">
    <SongsAndMovies />
    <Tabs />
    <ToDoList />

    <h1>Redux Toolkit example</h1>
    <Counter />
    <PokmonAsync />
  </div>
);
export default App;
