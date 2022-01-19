import React from "react";
import { createStore } from "redux";
import { NoteReducer } from "./noteReducer";
export const storeNote = createStore(NoteReducer);
