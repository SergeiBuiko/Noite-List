import { useAppDispatch } from '../../../hooks/hooks';
import { deleteNote, setID } from '../../../store/noteSlice';

interface INoteItemProps {
  id: string;
  description: string;
}

export const NoteItem: React.FC<INoteItemProps> = ({ id, description }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>{description}</span>
      <button onClick={() => dispatch(setID(id))}>Edit</button>
      <button onClick={() => dispatch(deleteNote(id))}> X </button>
    </div>
  );
};
