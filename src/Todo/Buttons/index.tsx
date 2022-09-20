import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((_theme: void) => ({
  buttons: {
    display: "flex",
    paddingLeft: "10px",
    "& button": {
      color: "white",
    },
  },
  important: {
    color: "red",
    fontWeight: "700!important",
    fontSize: "14px!important",
    background: "unset!important",
    border: "none!important",
  },
  edit: {
    color: "white!important",
  },
  delete: {
    color: "white!important",
  },
  done: {
    color: "green",
    fontWeight: "700!important",
    fontSize: "14px!important",
    background: "unset!important",
    border: "none!important",
  },
}));


interface ITodoButtonsProps {
  editClick: () => void;
  importantClick:() => void;
  doneClick:() => void;
  deleteClick:() => void;
}

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
