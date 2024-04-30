import React from "react";
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function Sidebar({ addNote }) {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="h-screen w-36 flex flex-col gap-10  border-gray-300 border-r rounded-3xl items-center">
        <p className="p-6 font-semibold text-center text-xl ">STICKIES</p>
        <button className="" onClick={handleExpand}>
          <IoAddCircle size={35} />
        </button>
        {isOpen && (
          <ul className="flex flex-col gap-3 ">
            {colors?.map((color, indx) => (
              <li
                className="bg-red-400 h-6 w-6 rounded-xl  cursor-pointer transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-600"
                key={indx}
                style={{ backgroundColor: color }}
                onClick={() => addNote(color)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
