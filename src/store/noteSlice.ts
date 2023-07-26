import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Note = {
  id: string;
  description: string;
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
    changeDescription(state, action: PayloadAction<string>) {
      state.noteList.map((note) => {
        if (note.id === state.noteId) {
          note.description = action.payload;
        }
      });
    },
  },
});

export const { addNote, deleteNote, setID, changeDescription } =
  noteSlice.actions;
export default noteSlice.reducer;
