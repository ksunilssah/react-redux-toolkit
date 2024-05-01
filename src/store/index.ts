import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import counterSlice from '../components/features/counter/counterSlice';
import pokemonSlice from '../components/features/pokemon/pokemonSlice';
import { pokemonApi } from '../services/pokemon';
import { songsSlice } from '../components/songs-movies/songs/songs-slice';
import { movieSlice } from '../components/songs-movies/movies/movieSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterSlice,
    pokemon: pokemonSlice,
    songs: songsSlice.reducer,
    movies: movieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

// store.dispatch({
//   type: 'song/addSong',
//   payload: 'addd me 111',
// });

// store.dispatch({
//   type: 'movie/addMovie',
//   payload: 'add movie',
// });

// store.dispatch(songsSlice.actions.addSong('aaaa'));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
