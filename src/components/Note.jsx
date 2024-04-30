import React from "react";
import { MdDelete } from "react-icons/md";

function Note({ note, deleteNote }) {
  console.log("key", note.id, "   note", note);
  const bgColor = note?.color;
  console.log("bgColor", bgColor);
  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="w-64 h-[270px] overflow-scroll rounded-2xl p-4 flex flex-col justify-between"
      >
        <textarea
          rows={2}
          className="flex-1 resize-none bg-transparent text-base leading-6 outline-none border-none"
        ></textarea>

        <div className="flex items-end justify-between mt-2">
          <div className="flex flex-col">
            <div className="font-semibold text-gray-700">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </div>
            <div className="text-xs text-gray-700">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <button
            onClick={() => {
              deleteNote(note?.id);
            }}
          >
            <MdDelete size={25} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Note;
