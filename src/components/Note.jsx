import React from "react";

function Note({ key, note }) {
  console.log("key", key, "   note", note);
  const bgColor = note?.color;
  console.log("bgColor", bgColor);
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-64 h-[270px] rounded-2xl p-3"
    >
      hello
    </div>
  );
}

export default Note;
