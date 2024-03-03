import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppDispatch } from '../store';
import { updatePokemonList } from '../components/features/pokemon/pokemonSlice';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;

export async function getPokemonList(dispatch: AppDispatch) {
  try {
    dispatch(
      updatePokemonList({
        data: undefined,
        loadingState: 'loading',
        errorState: null,
      })
    );
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      //   body: JSON.stringify(data),
    });

    const result = await response.json();
    dispatch(
      updatePokemonList({
        data: result,
        loadingState: 'loaded',
        errorState: null,
      })
    );
  } catch (error) {
    dispatch(
      updatePokemonList({
        data: undefined,
        loadingState: 'failed',
        errorState: `${error}`,
      })
    );
    console.error('Error:', error);
  }
}
