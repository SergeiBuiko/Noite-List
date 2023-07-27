import {
  Box,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '../../../hooks/hooks';
import { deleteNote, setID } from '../../../store/noteSlice';
import EditIcon from '@mui/icons-material/Edit';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import styles from './NoteItem.module.css';
import { node } from 'webpack';

interface INoteItemProps {
  id: string;
  description: string;
}

export const NoteItem: React.FC<INoteItemProps> = ({ id, description }) => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Paper className={styles.paper} elevation={3}>
        <Box className={styles.box}>
          <Typography
            className={styles.typography}
            sx={{
              fontSize: { xs: '16px', sm: '16px', md: '20px' },
              marginRight: '20px',
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box>
          <IconButton
            onClick={() => dispatch(setID(id))}
            className={styles.edit_button}
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
