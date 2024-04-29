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

  return (
    <div className="flex">
      <div className="fixed h-screen w-36">
        <Sidebar addNote={addNote} />
      </div>
      <div className="ml-36 overflow-y-auto">
        <NoteView notes={notes} />
      </div>
    </div>
  );
}

export default Dashboard;
