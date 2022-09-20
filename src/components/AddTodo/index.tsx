import { Box, Button, TextField, Typography } from "@mui/material";
import { IAddTodoProps } from "./models/addTodo.interface";


const AddTodo = ({classes, newTodo, handleReset, handleTodoChange, handleAddNewTodoClick}:IAddTodoProps) =>  {
    return (
        <>
              <Typography variant="h4" className={classes.title} align="center">
        My Tasks
      </Typography>
      <Box component="div" className={classes.lineGradient}></Box>
      <Box component="div" className={classes.wrapperArea}>
        <Box component="div" className={classes.inputArea}>
          <TextField
            className={classes.input}
            id="filled-search"
            type="search"
            value={newTodo ?? ""}
            placeholder="What do yo have planned?"
            sx={{ width: "33%" }}
            onReset={handleReset}
            onChange={handleTodoChange}
          />

          <Button onClick={handleAddNewTodoClick} className={classes.button}>
            ADD TASK
          </Button>
        </Box>
      </Box>
        </>
    )
}

export default AddTodo;