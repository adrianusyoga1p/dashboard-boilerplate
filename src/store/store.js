import uiReducer from '@/store/uiSlice'
import dataReducer from '@/store/dataSlice'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

export const rootReducer = combineSlices(uiReducer, dataReducer)

const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer
  }
})

export default store;