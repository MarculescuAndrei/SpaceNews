import React, { ChangeEvent, useState } from "react";

export interface NoteProps {
  addNote(note: string): void;
}

export const NoteInput: React.FC<NoteProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const changeNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={changeNote}
        value={note}
        className="input"
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={addNoteClick} className="button-6">
        {" "}
        Add Note
      </button>
    </div>
  );
};

export default NoteInput;
