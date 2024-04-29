import React from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

function Note({ key, note }) {
  console.log("key", key, "   note", note);
  const bgColor = note?.color;
  console.log("bgColor", bgColor);
  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="w-64 h-[270px] overflow-scroll rounded-2xl p-4 flex flex-row"
      >
        <textarea
          rows={2}
          className="flex-1 resize-none bg-transparent text-base leading-6 outline-none border-none"
        ></textarea>

        <div className="flex items-end justify-end">
          <MdModeEditOutline size={25} />
          <MdDelete size={25} />
        </div>
      </div>
    </>
  );
}

export default Note;
