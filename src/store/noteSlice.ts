import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Note = {
  id: string;
  title: string;
  complete: boolean;
};

type NoteState = {
  list: Note[];
};

const initialState: NoteState = {
  list: [],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        complete: false,
      });
    },
  },
});

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;
