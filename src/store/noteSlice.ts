import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Note = {
  id: string;
  description: string;
  complete: boolean;
};

type NoteState = {
  noteList: Note[];
};

const initialState: NoteState = {
  noteList: [],
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
    deleteNote(state, action: PayloadAction<string>) {
      state.noteList = state.noteList.filter(
        (note) => note.id !== action.payload
      );
    },
    editNote(state, action: PayloadAction<string>) {
      const editedElement = state.noteList.find(
        (note) => note.id === action.payload
      );
      if (editedElement) {
        editedElement.description = action.payload;
      }
      console.log(action.payload);
    },
  },
});

export const { addNote, deleteNote, editNote } = noteSlice.actions;
export default noteSlice.reducer;
