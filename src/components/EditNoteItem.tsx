import React, { ChangeEvent, useState } from 'react';
import { addNote, changeDescription, editNote } from '../store/noteSlice';
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
  const [inputText, setInputText] = useState(' ');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (inputText.trim().length) {
      dispatch(changeDescription(inputText));
    }
    setInputText(' ');
  };

  //   const [editText, setEditText] = useState('');
  return (
    <div>
      <TextField value={inputText} onChange={handleSubmit} />
      <button onClick={() => dispatch(editNote(inputText))}> Edit </button>
    </div>
  );
};
