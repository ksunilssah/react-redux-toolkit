import { createSlice } from '@reduxjs/toolkit';
import { songsSlice } from '../songs/songs-slice';
import { resetMoveisAndSongs } from '../common-actions';

const initialState: string[] = [];
export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers(builder) {
    // builder.addCase(songsSlice.actions.resetSongs, (state, action) => {
    //   return [];
    // });

    builder.addCase(resetMoveisAndSongs, (state, action) => {
      return [];
    });
  },
});

export const { addMovie } = movieSlice.actions;
