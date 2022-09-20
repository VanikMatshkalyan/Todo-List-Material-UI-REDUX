import React, { ChangeEvent, useState } from "react";
import { Typography } from "@material-ui/core";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  addTodo,
  filterTodo,
  updateFilteredState,
} from "../../redux/slicers/todoSlice";
import TodoList from "../List";
import {
  ITodoItems,
  ITodoSlicerState,
} from "../../shared/models/todo.interface";
import { useStyles } from "./styles";
import AddTodo from "../AddTodo";

function AddFilterTodo() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const copiedTodoList = useSelector(
    (state: { todo: ITodoSlicerState }) => state.todo.copiedList
  );

  const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddNewTodoClick = () => {
    const newTodoItem = {
      id: nanoid(5),
      title: newTodo,
      important: false,
      done: false,
    };
    if (newTodo.trim()) {
      dispatch(addTodo(newTodoItem));
      setNewTodo("");
    } else {
      alert("Remove spaces before submitting");
    }
  };

  const handleReset = () => {
    setNewTodo("");
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);

    const newList = copiedTodoList.filter((item: ITodoItems) =>
      item.title?.toLowerCase().includes(event.target.value?.toLowerCase())
    );
    dispatch(updateFilteredState(true));
    dispatch(filterTodo(newList));
  };

  const handleFilterReset = () => {
    setFilterValue("");
    dispatch(updateFilteredState(false));
    dispatch(filterTodo(copiedTodoList));
  };

  const handleFindImportantClick = () => {
    const newList = copiedTodoList.filter((item: ITodoItems) => item.important);
    dispatch(updateFilteredState(true));
    dispatch(filterTodo(newList));
  };

  const handleFindDoneClick = () => {
    const newList = copiedTodoList.filter((item: ITodoItems) => item.done);
    dispatch(updateFilteredState(true));
    dispatch(filterTodo(newList));
  };

  return (
    <Box component="div" className={classes.App}>
      <AddTodo
        classes={classes}
        handleAddNewTodoClick={handleAddNewTodoClick}
        handleReset={handleReset}
        handleTodoChange={handleTodoChange}
        newTodo={newTodo}
      />
      <Typography variant="h5" className={classes.title} align="center">
        Search
      </Typography>
      <Box component="div" className={classes.lineGradient}></Box>
      <Box component="div" className={classes.inputArea2}>
        <TextField
          id="filled-search"
          type="text"
          sx={{ width: "30%" }}
          value={filterValue ?? ""}
          onReset={handleFilterReset}
          onChange={handleFilterChange}
          className={classes.input}
        />
        <Box component="div">
          <Button onClick={handleFilterReset} className={classes.button1}>
            All
          </Button>
          <Button
            onClick={handleFindImportantClick}
            className={classes.button1}
          >
            Important
          </Button>
          <Button onClick={handleFindDoneClick} className={classes.button1}>
            Done
          </Button>
        </Box>
      </Box>
      <Typography variant="h6" className={classes.title} align="center">
        Tasks
      </Typography>
      <Box component="div" className={classes.lineGradient}></Box>
      <TodoList />
    </Box>
  );
}

export default AddFilterTodo;
