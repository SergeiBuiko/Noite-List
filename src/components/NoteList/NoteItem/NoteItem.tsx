import { Box, IconButton, Paper, Typography } from '@mui/material';
import { useAppDispatch } from '../../../hooks/hooks';
import { deleteNote, setID } from '../../../store/noteSlice';
import EditIcon from '@mui/icons-material/Edit';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import styles from './NoteItem.module.css';

interface INoteItemProps {
  id: string;
  description: string;
}

export const NoteItem: React.FC<INoteItemProps> = ({ id, description }) => {
  const dispatch = useAppDispatch();

  return (
    <Paper className={styles.paper} elevation={3}>
      <Box className={styles.box}>
        <Typography
          className={styles.typography}
          sx={{
            fontSize: { xs: '16px', sm: '16px', md: '20px' },
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box>
        <IconButton
          onClick={() => dispatch(setID(id))}
          className={styles.edit_button}
          color="primary"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => dispatch(deleteNote(id))}
          className={styles.close_button}
          color="primary"
        >
          <CloseSharpIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
