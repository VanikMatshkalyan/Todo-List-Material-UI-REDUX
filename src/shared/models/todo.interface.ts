export interface ITodoItems {
    id: string;
    title: string;
    important: boolean;
    done: boolean;
    
  }

  export interface ITodoSlicerState {
    copiedList: ITodoItems[];
    list: ITodoItems[];
    filtered: boolean;
  }