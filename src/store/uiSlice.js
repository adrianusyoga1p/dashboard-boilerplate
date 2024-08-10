import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: true,
  isOpen: {},
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    setModal: (state, action) => {
      state.isOpen[action.payload.id] = action.payload.isOpen;
    }
  },
});

export const { setToggle, setModal } = uiSlice.actions;
export default uiSlice.reducer;
