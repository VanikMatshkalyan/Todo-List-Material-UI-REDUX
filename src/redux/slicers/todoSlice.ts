import { createSlice } from "@reduxjs/toolkit";
import { ITodoItems, ITodoSlicerState } from "../../shared/models/todo.interface";

const initialState: ITodoSlicerState = {
  list: [],
  copiedList: [],
  filtered: false,
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const copiedList: ITodoItems[] = [...state.list];
      const newList: ITodoItems[] = [...copiedList, payload as ITodoItems];
      state.list = newList;
      state.copiedList = newList;
    },
    updateFilteredState: (state, { payload }) => {
      state.filtered = payload;
    },
    updateTodo: (state, { payload }) => {
      state.list = payload;
    },
    updateCopiedList :(state, { payload }) => {
      state.copiedList = payload;
    },
    deleteTodo: (state, { payload }) => {
      const copiedList = [...state.list];
      const filteredList = copiedList.filter(
        (item: ITodoItems) => item.id !== payload
      );
      state.list = filteredList;
      state.copiedList = filteredList;
    },
    filterTodo: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  filterTodo,
  updateFilteredState,
  updateCopiedList
} = counterSlice.actions;

export default counterSlice.reducer;
