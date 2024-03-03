import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
  incrementAsync,
} from './counterSlice';

const Counter = () => {
  // const counter = useSelector((state: RootState) => state.counter);
  const count = useSelector(selectCount); //Alternate of line no 7
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>Count: {count} </span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <p>
        <input
          type="text"
          onChange={(e) => {
            const value = e.target.value;
            dispatch(incrementByAmount(parseInt(value)));
          }}
        />
      </p>
      <button onClick={() => dispatch(incrementAsync(222))}>Add Async</button>
    </div>
  );
};

export default Counter;
