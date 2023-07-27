import { NoteItem } from './NoteItem/NoteItem';
import { EditNoteItem } from './EditNoteItem/EditNoteItem';
import { useAppSelector } from '../../hooks';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { ChangeEvent } from 'react';

export const NoteList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const noteQuery = searchParams.get('note') || '';

  const notes = useAppSelector((state) => state.notes.noteList);
  const noteId = useAppSelector((state) => state.notes.noteId);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = event.target.search.value;
    setSearchParams({ note: query });
  };

  return (
    <Box width={{ xs: '90%', md: '60%' }}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <input type="submit" value="Search" />
      </form>
      {notes
        .filter((note) => note.description.includes(noteQuery))
        .map((note) => {
          if (note.id === noteId) {
            return <EditNoteItem key={note.id} {...note} />;
          }
          return <NoteItem key={note.id} {...note} />;
        })}
    </Box>
  );
};
