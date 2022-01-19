export type Action = { type: "ADDNOTE"; payload: string };

export const addNote = (note: string): Action => ({
  type: "ADDNOTE",
  payload: note,
});
