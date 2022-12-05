import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/state/counter/counterSlice";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch= useDispatch()
  return (
    <div className="card">
      <div className="card-header bg-secondary">
        <h3 className="text-white text-center">My Counter</h3>
      </div>
      <div className="card-body">
        <h1 className="text-center">{value}</h1>
        <div className="my-4 mx-auto d-flex gap-3 justify-content-center align-items-center">
          <button onClick={() => dispatch(increment()) } className="btn btn-success">Increase</button>
          <button onClick={() => dispatch(decrement())} className="btn btn-danger">Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
