import { NoteItem } from './NoteItem/NoteItem';
import { EditNoteItem } from './EditNoteItem/EditNoteItem';
import { useAppSelector } from '../../hooks';
import { Box } from '@mui/material';

export const NoteList = () => {
  const notes = useAppSelector((state) => state.notes.noteList);
  const noteId = useAppSelector((state) => state.notes.noteId);

  return (
    <Box width={{ xs: '90%', md: '60%' }}>
      {notes.map((note) => {
        if (note.id === noteId) {
          return <EditNoteItem key={note.id} {...note} />;
        }
        return <NoteItem key={note.id} {...note} />;
      })}
    </Box>
  );
};
