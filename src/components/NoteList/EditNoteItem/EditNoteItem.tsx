import React, { ChangeEvent, useState } from 'react';
import { changeDescription, setID } from '../../store/noteSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { TextField } from '@mui/material';

interface IEditNoteItemProps {
  id: string;
  description: string;
}

export const EditNoteItem: React.FC<IEditNoteItemProps> = ({ description }) => {
  const [editText, setEditText] = useState(description);
  const dispatch = useAppDispatch();

  const addText = (event: ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(changeDescription(editText));
    dispatch(setID(''));
  };

  return (
    <div>
      <TextField value={editText} onChange={addText} />
      <button onClick={handleSubmit}> Edit </button>
    </div>
  );
};
