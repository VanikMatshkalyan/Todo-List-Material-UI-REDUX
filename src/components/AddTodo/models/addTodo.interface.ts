import { ClassNameMap } from "@mui/styles";
import { ChangeEvent } from "react";

export interface IAddTodoProps {
  classes: ClassNameMap<any>;
  newTodo: string;
  handleReset: () => void ;
  handleTodoChange:(event: ChangeEvent<HTMLInputElement>) => void;
  handleAddNewTodoClick: () => void;
}
