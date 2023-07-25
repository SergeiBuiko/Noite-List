import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { deleteNote, setID } from '../store/noteSlice';

interface INoteItemProps {
  id: string;
  description: string;
  complete: boolean;
}

export const NoteItem: React.FC<INoteItemProps> = ({
  id,
  description,
  complete,
}) => {
  const dispatch = useAppDispatch();

  const [editTodoID, setEditTodoId] = useState<string | null>(null);

  // const editID = (id) => {
  //   setEditTodoId(id);
  // };

  return (
    <div>
      <span>{description}</span>
      <button onClick={() => dispatch(setID(id))}>Edit</button>
      <button onClick={() => dispatch(deleteNote(id))}> X </button>
    </div>
  );
};
