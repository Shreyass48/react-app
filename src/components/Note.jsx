import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

function Note({ note, deleteNote }) {
  const [isStarred, setIsStarred] = useState(false);
  const bgColor = note?.color;
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
          <div className="flex gap-1">
            {isStarred ? (
              <button
                onClick={() => {
                  setIsStarred(!isStarred);
                }}
              >
                <AiFillStar size={25} color={"yellow"} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsStarred(!isStarred);
                }}
              >
                <AiOutlineStar size={25} />
              </button>
            )}

            <button
              onClick={() => {
                deleteNote(note?.id);
              }}
            >
              <MdDelete size={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
