import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ITodoItems,
  ITodoSlicerState,
} from "../../shared/models/todo.interface";
import {
  deleteTodo,
  filterTodo,
  updateCopiedList,
  updateTodo,
} from "../../redux/slicers/todoSlice";
import TodoItem from "../Item";

const TodoList = () => {
  const todoList = useSelector(
    (state: { todo: ITodoSlicerState }) => state.todo.list
  );
  const copiedList = useSelector(
    (state: { todo: ITodoSlicerState }) => state.todo.copiedList
  );
  const filteredState = useSelector(
    (state: { todo: ITodoSlicerState }) => state.todo.filtered
  );
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const saveHandler = (id: string) => {
    const findedData = todoList.find((item: ITodoItems) => item.id === id);
    const newList = todoList.map((item: ITodoItems) => {
      if (item.id === findedData?.id) {
        return { ...item, title: inputValue };
      }
      return item;
    });
    dispatch(updateTodo(newList));
  };

  const doneHandler = (id: string) => {
    if (filteredState) {
      const findedData = copiedList.find((item: ITodoItems) => item.id === id);
      const newList = copiedList.map((item: ITodoItems) => {
        if (item.id === findedData?.id) {
          return { ...item, done: !item.done, important: false };
        }
        return item;
      });

      const filteredData = newList.filter(
        (item) => !item.done && item.important
      );
      dispatch(updateCopiedList(newList));
      dispatch(filterTodo(filteredData));
      return;
    }
    const findedData = todoList.find((item: ITodoItems) => item.id === id);
    const newList = todoList.map((item: ITodoItems) => {
      if (item.id === findedData?.id) {
        return { ...item, done: !item.done, important: false };
      }
      return item;
    });
    dispatch(updateTodo(newList));
    dispatch(updateCopiedList(newList));
  };

  const importantHandler = (id: string) => {
    if (filteredState) {
      const findedData = copiedList.find((item: ITodoItems) => item.id === id);
      const newList = copiedList.map((item: ITodoItems) => {
        if (item.id === findedData?.id) {
          return { ...item, important: !item.important, done: false };
        }
        return item;
      });
      const filteredData = newList.filter(
        (item) => !item.important && item.done
      );

      dispatch(updateCopiedList(newList));
      dispatch(filterTodo(filteredData));
      return;
    }
    const findedData = todoList.find((item: ITodoItems) => item.id === id);
    const newList = todoList.map((item: ITodoItems) => {
      if (item.id === findedData?.id) {
        return { ...item, important: !item.important, done: false };
      }
      return item;
    });
    dispatch(updateTodo(newList));
    dispatch(updateCopiedList(newList));
  };

  const deleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <React.Fragment>
      {todoList.map((item: ITodoItems) => (
        <TodoItem
          key={item.id}
          saveClick={() => saveHandler(item.id)}
          importantClick={() => importantHandler(item.id)}
          doneClick={() => doneHandler(item.id)}
          deleteClick={() => deleteHandler(item.id)}
          item={item}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      ))}
    </React.Fragment>
  );
};

export default TodoList;
