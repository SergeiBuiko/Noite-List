import React, { ChangeEvent, useState } from 'react';
import { changeDescription, setID } from '../../../store';
import { Box, Button, List, ListItem, Paper, TextField } from '@mui/material';
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
    <Box>
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

      {/* <Paper> */}
      <Box className={styles.typography}>
        <List>
          {description
            .split(' ')
            .filter((el) => el[0] === '#')
            .map((el, id) => (
              <ListItem
                key={id}
                className={styles.listItem}
                sx={{ padding: '0px' }}
              >
                {el}
              </ListItem>
            ))}
        </List>
      </Box>
      {/* </Paper> */}
    </Box>
  );
};
