import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { deleteNote } from '../store/noteSlice';

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
  return (
    <div>
      <span>{description}</span>
      <button onClick={() => dispatch(deleteNote(id))}> X </button>
    </div>
  );
};
