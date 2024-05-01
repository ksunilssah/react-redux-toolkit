import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from './movieSlice';
import { RootState } from '../../../store';

const Movies = () => {
  const disptach = useDispatch();
  const moviesList = useSelector((state: RootState) => state.movies);
  const onAddMovieClick = (e: any) => {
    e.preventDefault();
    disptach(addMovie('moive 1'));
  };

  const renderMovieList = () => {
    return moviesList.map((movie, index) => (
      <li key={movie + index}>{movie}</li>
    ));
  };
  return (
    <div className="movies-section col">
      <div className="row">
        <button onClick={onAddMovieClick}>Add Movies</button>
      </div>
      <div className="row">
        <ul>{renderMovieList()}</ul>
      </div>
    </div>
  );
};

export default Movies;
