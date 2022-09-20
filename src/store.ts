import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './redux/slicers/todoSlice'

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
})