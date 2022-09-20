import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import TodoButtons from "../Buttons";
import { useStyles } from "./styles";
import { ITodoItemProps } from "./models/item.interface";


const TodoItem = ({
  item,
  importantClick,
  doneClick,
  deleteClick,
  setInputValue,
  inputValue,
  saveClick,
}: ITodoItemProps) => {
  const classes = useStyles();

  const [editState, setEditState] = useState(false);

  const handleEditButtons = () => {
    setInputValue(item.title);
    setEditState(true);
  };

  const handleSaveButtons = () => {
    setEditState(false);
    saveClick();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Box component="div" className={classes.addedTasks}>
        <TextField
          disabled={!editState}
          className={
            editState
              ? classes.input
              : item.important
              ? classes.important
              : item.done
              ? classes.done
              : classes.text
          }
          value={editState ? inputValue : item.title}
          onChange={onChange}
        />
        <Box component="div" className={classes.buttonArea}>
          {editState ? (
            <>
              <Button onClick={handleSaveButtons} className={classes.edit}>
                Save
              </Button>
            </>
          ) : (
            <TodoButtons
              editClick={handleEditButtons}
              doneClick={doneClick}
              deleteClick={deleteClick}
              importantClick={importantClick}
            />
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default TodoItem;
