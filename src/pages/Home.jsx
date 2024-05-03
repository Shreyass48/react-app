import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex space-y-4 flex-col h-screen w-screen items-center justify-center">
        <div className="w-12 h-12">
          <img src="favicon.png" alt="" />
        </div>
        <div>
          <p className="text-[58px] font-semibold">Stickies</p>
        </div>
        <div className="pt-44">
          <NavLink to={"/login"}>
            <button className="bg-black text-white rounded-2xl px-3 py-1">
              Sign Up
            </button>
          </NavLink>
        </div>
        <div className="pt-5 text-gray-700">
          <p>
            Capture thoughts or detailed notes.
            <br />
            &ensp; Your notes are always up to date
            <br />
            &emsp; &ensp; on any device and on web.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
