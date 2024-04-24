import React from "react";
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="h-screen w-36 flex flex-col gap-10 border border-r-1 rounded-2xl items-center">
        <p className="p-6 font-semibold text-center text-xl">
          WEB <br />
          NOTES
        </p>
        <button onClick={handleExpand}>
          <IoAddCircle size={35} />
        </button>
        {isOpen && (
          <ul className="flex flex-col gap-3 transition-transform duration-700">
            {colors?.map((color, indx) => (
              <li
                className="bg-red-400 h-6 w-6 rounded-xl  cursor-pointer"
                key={indx}
                style={{ backgroundColor: color }}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
