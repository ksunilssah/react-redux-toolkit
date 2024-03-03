import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonList } from '../../../services/pokemon';
import { RootState } from '../../../store';

const PokmonAsync = () => {
  const pokemonObj = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();
  const { data, loadingState, errorState } = pokemonObj;
  useEffect(() => {
    getPokemonList(dispatch);
  }, []);

  if (loadingState === 'loading') {
    return <div>Loading...</div>;
  }

  if (loadingState === 'failed') {
    return <div className="error">Error: `${errorState}`</div>;
  }

  if (loadingState === 'loaded' && data) {
    console.log(pokemonObj, '------');
    return (
      <div>
        <h3>{data.species.name}</h3>
        <img src={data.sprites.front_shiny} alt={data.species.name} />
      </div>
    );
  }
  return null;
};

export default PokmonAsync;
