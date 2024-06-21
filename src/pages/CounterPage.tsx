
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { RootState } from "../store/store";
import { decrement, increment, incrementByAmount } from "../store/counterSlice";
const CounterPage: React.FC = () => {
    
    const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    );
  };
  
  export default CounterPage;