import './styles.scss';

import React, { useState } from 'react';

interface ToDoList {
  title: string;
  desc: string;
  id: number;
}
const ToDoList = () => {
  const [toDoList, updateToDoList] = useState<ToDoList[]>([]);
  const [title, updateTitle] = useState<string>('');
  const [desc, updateDesc] = useState<string>('');
  const [isEditMode, updateEditMode] = useState<number | undefined>();

  const onTitleChange = (e: any) => {
    const newTitle = e.target.value;
    updateTitle(newTitle);
  };

  const onDescriptionChange = (e: any) => {
    const newDesc = e.target.value;
    updateDesc(newDesc);
  };

  const onAddClick = (e: any) => {
    e.preventDefault();

    if (isEditMode) {
      const updatedList = toDoList.map((item) => {
        if (item.id === isEditMode) {
          return {
            title,
            desc,
            id: isEditMode,
          };
        }
        return item;
      });
      updateToDoList(updatedList);
      updateEditMode(undefined);
    } else {
      if (title && desc) {
        updateToDoList([
          ...toDoList,
          {
            title,
            desc,
            id: Math.random() * 10,
          },
        ]);
      }
    }

    updateDesc('');
    updateTitle('');
  };

  const onEdit = (e: any, item: ToDoList) => {
    e.preventDefault();
    updateEditMode(item.id);
    updateDesc(item.desc);
    updateTitle(item.title);
  };

  const onDelete = (e: any, id: number) => {
    e.preventDefault();
    const index = toDoList.findIndex((item) => item.id === id);
    const udpatedList = toDoList.slice(index + 1);
    updateToDoList(udpatedList);
  };

  const RenderToDoList = () => {
    return toDoList.map(({ title, desc, id }) => (
      <li key={id}>
        <div className="col text-left">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
        <div className="col">
          <button onClick={(e) => onEdit(e, { id, title, desc })}>Edit</button>
          <button onClick={(e) => onDelete(e, id)}>Delete</button>
        </div>
      </li>
    ));
  };
  return (
    <div className="to-do-list-container">
      <form method="post" className="form-container col">
        <div className="row">
          <input
            name="title"
            id="title"
            value={title}
            onChange={onTitleChange}
            type="text"
          />
        </div>
        <div className="row">
          <textarea
            name="description"
            value={desc}
            onChange={onDescriptionChange}
          />
        </div>
        <div className="row center">
          <button onClick={onAddClick}>Add</button>
        </div>
      </form>
      <div className="to-do-list col">
        <ul>
          <RenderToDoList />
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
