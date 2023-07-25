import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import { NoteItem } from './NoteItem';
import { EditNoteItem } from './EditNoteItem';

export const NoteList = () => {
  const notes = useAppSelector((state) => state.notes.noteList);
  const noteId = useAppSelector((state) => state.notes.noteId);

  return (
    <div>
      {notes.map((note) => {
        if (note.id === noteId) {
          return <EditNoteItem key={note.id} {...note} />;
          // return <NoteItem key={note.id} {...note} />;
        }
        return <NoteItem key={note.id} {...note} />;
        // return <EditNoteItem key={note.id} {...note} />;
      })}
    </div>
  );
};
