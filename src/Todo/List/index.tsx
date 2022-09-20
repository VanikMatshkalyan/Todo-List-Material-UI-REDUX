import React, { ChangeEvent } from "react";
import TodoItem from "../Item";

interface ITodoListProps {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  setCopiedData: React.Dispatch<React.SetStateAction<any[]>>;
}

const TodoList = ({ data, setData, setCopiedData }: ITodoListProps) => {
  const editHandler = (id: number) => {
    const findedData = data.find((item) => item.id === id);

    setData([
      {
        ...findedData,
        edited: !findedData.edited,
      },
      ...data.filter((item) => item.id !== id),
    ]);

    setCopiedData([
      {
        ...findedData,
        edited: !findedData.edited,
      },
      ...data.filter((item) => item.id !== id),
    ]);
  };

  const doneHandler = (id: number) => {
    const findedData = data.find((item) => item.id === id);

    setData([
      {
        ...findedData,
        important: false,
        done: !findedData.done,
      },
      ...data.filter((item) => item.id !== id),
    ]);

    setCopiedData([
      {
        ...findedData,
        important: false,
        done: !findedData.done,
      },
      ...data.filter((item) => item.id !== id),
    ]);
  };

  const importantHandler = (id: number) => {
    const findedData = data.find((item) => item.id === id);

    setData([
      {
        ...findedData,
        done: false,
        important: !findedData.important,
      },
      ...data.filter((item) => item.id !== id),
    ]);

    setCopiedData([
      {
        ...findedData,
        done: false,
        important: !findedData.important,
      },
      ...data.filter((item) => item.id !== id),
    ]);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const findedData = data.find((item) => item.id === id);

    setData([
      {
        ...findedData,
        title: event.target.value,
      },
      ...data.filter((item) => item.id !== id),
    ]);

    setCopiedData([
      {
        ...findedData,
        title: event.target.value,
      },
      ...data.filter((item) => item.id !== id),
    ]);
  };

  const deleteHandler = (id: number) => {
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
    setCopiedData(updatedList);
  };

  return (
    <React.Fragment>
      {data
        .slice(0)
        .sort((a: any, b: any) => a.id - b.id)
        .map((item) => (
          <TodoItem
            key={item.id}
            editClick={() => editHandler(item.id)}
            importantClick={() => importantHandler(item.id)}
            doneClick={() => doneHandler(item.id)}
            onInputChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChange(event, item.id)
            }
            deleteClick={() => deleteHandler(item.id)}
            item={item}
          />
        ))}
    </React.Fragment>
  );
};

export default TodoList;
