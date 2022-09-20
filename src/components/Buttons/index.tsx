import React from "react";
import { Box, Button } from "@mui/material";
import { useStyles } from "./styles";
import { ITodoButtonsProps } from "./models/buttons.interface";

const TodoButtons = ({
  editClick,
  importantClick,
  doneClick,
  deleteClick,
}: ITodoButtonsProps) => {
  const classes = useStyles();
  return (
    <Box  component="div"  className={classes.buttons}>
      <Button onClick={editClick} className={classes.edit}>
        Edit
      </Button>
      <Button onClick={importantClick} className={classes.important}>
        Important
      </Button>
      <Button onClick={doneClick} className={classes.done}>
        Done
      </Button>
      <Button onClick={deleteClick} className={classes.delete}>
        Delete
      </Button>
    </Box>
  );
};

export default TodoButtons;
