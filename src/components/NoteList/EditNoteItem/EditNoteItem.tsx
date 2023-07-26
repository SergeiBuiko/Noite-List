import React, { ChangeEvent, useState } from 'react';
import { changeDescription, setID } from '../../../store';
import { Button, Paper, TextField } from '@mui/material';
import { useAppDispatch } from '../../../hooks';
import styles from './EditNoteItem.module.css';

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
    <Paper className={styles.paper} elevation={3}>
      <TextField
        value={editText}
        onChange={addText}
        className={styles.textfield}
      />
      <Button onClick={handleSubmit} className={styles.button}>
        Edit
      </Button>
    </Paper>
  );
};
