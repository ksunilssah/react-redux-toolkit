import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { addSong } from './songs-slice';

const Songs = () => {
  const dispatch = useDispatch();
  const songsState = useSelector((state: RootState) => state.songs);
  const onAddSongClick = (e: any) => {
    e.preventDefault();
    dispatch(addSong('add song one'));
  };

  const renderSongs = () => {
    return songsState.map((song, index) => <li key={song + index}>{song}</li>);
  };
  return (
    <div className="songs-section col">
      <div className="row">
        <button onClick={onAddSongClick}> Add song</button>
      </div>
      <div className="row">
        <ul>{renderSongs()}</ul>
      </div>
    </div>
  );
};

export default Songs;
