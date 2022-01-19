import { Action } from "./actions";
export interface NoteState {
  notes: string[];
}
const initialState = {
  notes: [],
};

export const NoteReducer = (
  state: NoteState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADDNOTE": {
      console.log("im in addnote");
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};
