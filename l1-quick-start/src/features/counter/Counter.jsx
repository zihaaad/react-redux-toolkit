import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmmount, reset} from "./counterSlice";

const Counter = () => {
  const [incrementAmmount, setIncrementAmmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const addValue = +incrementAmmount || 0;

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <span>
          {" "}
          ___ [ <b>{count}</b> ] ___{" "}
        </span>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <hr />
      <input
        type="number"
        value={incrementAmmount}
        onChange={(e) => setIncrementAmmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmmount(addValue))}>
          Add Ammount
        </button>{" "}
        <button
          onClick={() => {
            dispatch(reset()) && setIncrementAmmount(0);
          }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
