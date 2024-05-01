import { createSlice } from '@reduxjs/toolkit';
import { resetMoveisAndSongs } from '../common-actions/index';

const initialState: string[] = [];

export const songsSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    // resetSongs: (state) => {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(resetMoveisAndSongs, (state, action) => {
      return [];
    });
  },
});

export const { addSong } = songsSlice.actions;
