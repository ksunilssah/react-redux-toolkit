import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: undefined,
    loadingState: 'notLoaded',
    errorState: null,
  },
  reducers: {
    updatePokemonList: (state, action) => {
      const { data, loadingState, errorState } = action.payload;
      state.data = data;
      state.loadingState = loadingState;
      state.errorState = errorState;
    },
  },
});

export const { updatePokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer;
