import styles from './App.module.css';
import { Box } from '@mui/material';
import { Header } from './components/Header';
import { InputFieldNote } from './components/InputFieldNote';
import { NoteList } from './components/NoteList';

export const App = () => {
  return (
    <Box className={styles.App}>
      <Header />
      <InputFieldNote />
      <NoteList />
    </Box>
  );
};
