import React from 'react';
import { useGetPokemonByNameQuery } from '../../../services/pokemon';

const Pokemon = () => {
  const { data, error, isLoading, isSuccess } =
    useGetPokemonByNameQuery('bulbasaur');

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <h3>{data.species.name}</h3>
        <img src={data.sprites.front_shiny} alt={data.species.name} />
      </div>
    );
  }
};

export default Pokemon;
