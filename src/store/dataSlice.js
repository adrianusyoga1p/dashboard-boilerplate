import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    addData: (state, action) => {
      state.data.push({
        ...action.payload,
        status: true,
      })
    },
    updateData: (state, action) => {
      const {id, username, name, email} = action.payload;
      const index = state.data.findIndex(item => item.id === id);
      if(index !== -1){
        state.data[index].name = name;
        state.data[index].email = email;
        state.data[index].username = username;
      }
    },
    deleteData: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload.id);
    }
  }
});

export const {addData, setData, updateData, deleteData} = dataSlice.actions;
export default dataSlice.reducer;
