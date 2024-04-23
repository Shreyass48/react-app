import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavLink to="/dashboard">
        <p className="text-lg text-blue-400">click here to navigate!</p>
      </NavLink>
    </div>
  );
}

export default Home;
