import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addData: (state, action) => {
      state.data.push({
        ...action.payload,
      });
    },
    updateData: (state, action) => {
      const { id, ...newData } = action.payload;
      const index = state.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...newData };
      }
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addData, setData, updateData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;
