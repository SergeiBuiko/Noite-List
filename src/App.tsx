import styles from './App.module.css';
import { Box } from '@mui/material';
import { Header, InputFieldNote, NoteList } from './components';

export const App = () => {
  return (
    <Box className={styles.App}>
      <Header />
      <InputFieldNote />
      <NoteList />
    </Box>
  );
};
