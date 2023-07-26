import { IconButton, Paper, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { addNote } from '../../store/noteSlice';
import { useAppDispatch } from '../../hooks/hooks';
import styles from './InputFieldNote.module.css';
import AddIcon from '@mui/icons-material/AddBoxOutlined';

export const InputFieldNote = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useAppDispatch();
  const addText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim().length) {
      dispatch(addNote(inputText));
    }
    setInputText(' ');
  };

  return (
    <Paper elevation={3} className={styles.paper}>
      <TextField
        className={styles.textfield}
        placeholder="Add Note"
        value={inputText}
        onChange={addText}
      ></TextField>
      {inputText ? (
        <IconButton
          className={styles.add_button}
          color="primary"
          onClick={handleSubmit}
        >
          <AddIcon />
        </IconButton>
      ) : (
        <IconButton disabled>
          <AddIcon />
        </IconButton>
      )}
    </Paper>
  );
};
