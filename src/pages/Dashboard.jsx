import React from "react";
import { useState } from "react";
import NoteView from "../components/NoteView";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    let newNote = [...notes];
    newNote.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(newNote);
  };
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  return (
    <div className="flex">
      <div className="fixed h-screen w-36">
        <Sidebar addNote={addNote} />
      </div>
      <div className="ml-36 overflow-y-auto">
        <NoteView notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default Dashboard;
