import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
  isOpen: {},
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setToggle: (state) => {
      state.value = !state.value;
    },
    setModal: (state, action) => {
      state.isOpen[action.payload.id] = action.payload.isOpen;
    }
  },
});

export const { setToggle, setModal } = uiSlice.actions;
export default uiSlice.reducer;
