import React, { ChangeEvent, useState } from 'react';
import { editNote } from '../store/noteSlice';
import { useAppDispatch } from '../hooks/hooks';
import { TextField } from '@mui/material';

interface INoteItemProps {
  id: string;
  description: string;
  complete: boolean;
}

export const EditNoteItem: React.FC<INoteItemProps> = ({
  id,
  description,
  complete,
}) => {
  const [inputText, setInputText] = useState('');

  const addText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  //   const onClick = () => {
  //     changeTodo(editTodo);
  //   };

  const dispatch = useAppDispatch();
  //   const [editText, setEditText] = useState('');
  return (
    <div>
      <TextField value={inputText} onChange={addText} />
      <button onClick={() => dispatch(editNote(inputText))}> Edit </button>
    </div>
  );
};
