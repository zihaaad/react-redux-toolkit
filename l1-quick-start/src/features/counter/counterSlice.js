import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmmount: (state, {payload}) => {
      state.value += payload;
    },
  },
});

export const {increment, decrement, incrementByAmmount, reset} =
  counterSlice.actions;

export default counterSlice.reducer;
