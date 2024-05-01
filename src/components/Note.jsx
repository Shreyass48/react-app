import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { VscSave } from "react-icons/vsc";
import { useState } from "react";

function Note({ note, deleteNote, updateNote }) {
  const [data, setData] = useState(note?.text || "");
  const [saveVisible, setSaveVisible] = useState(false);
  const bgColor = note?.color;

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="w-64 h-[270px] overflow-hidden rounded-2xl p-4 flex flex-col justify-between"
      >
        <textarea
          value={data}
          rows={2}
          onChange={(e) => {
            setSaveVisible(true);
            setData(e.target.value);
          }}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
          }}
          className="flex-1 resize-none overflow-y-scroll bg-transparent text-base leading-6 outline-none border-none"
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
            {/* {isStarred ? (
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
            )} */}
            {saveVisible && (
              <button
                onClick={() => {
                  setSaveVisible(false);
                  updateNote(data, note?.id);
                }}
              >
                <VscSave size={22} />
              </button>
            )}

            <button
              onClick={() => {
                deleteNote(note?.id);
              }}
            >
              <AiOutlineDelete size={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
