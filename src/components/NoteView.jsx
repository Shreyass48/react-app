import React from "react";
import Note from "./Note";

function NoteView({ notes, deleteNote, updateNote }) {
  console.log(notes);

  return (
    <div className="w-full p-5 pl-10">
      <input
        placeholder="Search"
        type="text"
        className="p-1 mt-5 border border-gray-100 rounded-md w-96"
      />
      <div className="mt-10">
        <p className="text-3xl font-semibold">Daily Tasks</p>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note updateNote={updateNote} note={item} deleteNote={deleteNote} />
          ))
        ) : (
          <p className="text-red-500 font-semibold text-xl">No Notes Found</p>
        )}
      </div>
    </div>
  );
}

export default NoteView;
