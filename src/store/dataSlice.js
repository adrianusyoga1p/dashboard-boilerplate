import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  {
    id: "1",
    username: "adrian",
    status: true,
  },
  {
    id: "2",
    username: "yoga",
    status: false,
  },
];

const initialState = {
  data: initialData
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
      const {id, username, status} = action.payload;
      const index = state.data.findIndex(item => item.id === id);
      if(index !== -1){
        state.data[index].username = username;
        state.data[index].status = status;
      }
    },
    deleteData: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload.id);
    }
  }
});

export const {addData, setData, updateData, deleteData} = dataSlice.actions;
export default dataSlice.reducer;
