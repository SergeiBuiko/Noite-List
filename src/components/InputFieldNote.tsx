import { Box, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { addNote } from '../store/noteSlice';

export const InputFieldNote = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useAppDispatch();
  const addText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  console.log(inputText);

  const handleSubmit = () => {
    if (inputText.trim().length) {
      dispatch(addNote(inputText));
    }
    setInputText(' ');
  };

  return (
    <Box>
      <TextField
        placeholder="Add Note"
        value={inputText}
        onChange={addText}
      ></TextField>
      <button onClick={handleSubmit}>Add</button>
    </Box>
  );
};
