import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Note = {
  id: string;
  description: string;
  complete: boolean;
};

type NoteState = {
  noteList: Note[];
  noteId: string;
};

const initialState: NoteState = {
  noteList: [],
  noteId: ' ',
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<string>) {
      state.noteList.push({
        id: new Date().toISOString(),
        description: action.payload,
        complete: false,
      });
    },
    changeDescription(state, action: PayloadAction<string>) {
      state.noteList.map((note) => {
        if (note.id === state.noteId) {
          // return (note.description = action.payload);

          note.description = action.payload;
        }
        console.log(note.description);
        // return note;
        // return console.log('Мимо');
      });
    },
    deleteNote(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.filter(
        (note) => note.id !== action.payload
      );
    },
    setID(state, action: PayloadAction<string>) {
      state.noteId = action.payload;
    },
    editNote(state, action: PayloadAction<string>) {
      const editedElement = state.noteList.find(
        (note) => note.id === action.payload
      );

      if (editedElement) {
        editedElement.description = action.payload;
      }
    },
  },
});

export const { addNote, deleteNote, editNote, setID, changeDescription } =
  noteSlice.actions;
export default noteSlice.reducer;
