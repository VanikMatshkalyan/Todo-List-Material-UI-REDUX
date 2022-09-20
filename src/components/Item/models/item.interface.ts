import { ITodoItems } from "../../../shared/models/todo.interface";

export interface ITodoItemProps {
    item: ITodoItems;
    importantClick: () => void;
    doneClick: () => void;
    deleteClick: () => void;
    onInputChange?: (value: string) => void;
    setInputValue: (value: string) => void;
    inputValue: string;
    saveClick: () => void;
  }