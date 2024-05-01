import './styles.scss';

import React from 'react';
import { useDispatch } from 'react-redux';
import Movies from './movies';
import Songs from './songs';
import { resetMoveisAndSongs } from './common-actions';

// import { resetSongs } from './songs/songs-slice';

const SongsAndMovies = () => {
  const dispatch = useDispatch();
  const onReset = () => {
    // dispatch(resetSongs());
    dispatch(resetMoveisAndSongs());
  };
  return (
    <div className="songs-moves-container">
      <div className="clear-all">
        <button onClick={onReset}>Reset</button>
      </div>
      <Songs />
      <Movies />
    </div>
  );
};

export default SongsAndMovies;
