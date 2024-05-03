import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex  justify-center items-center h-screen w-screen relative">
      <img
        src="/loginBg.png"
        alt="loginform"
        className="w-[30rem] h-[30rem] mb-20"
      />
      <p className="absolute text-xl pb-52">Login</p>

      <input
        className="absolute p-1 mb-28 border border-black rounded bg-transparent"
        type="text"
        placeholder="Username"
      />

      <input
        className="absolute p-1 border border-black rounded bg-transparent"
        type="text"
        placeholder="Password"
      />

      <button
        onClick={handleSubmit}
        className="absolute hover:bg-yellow-300 px-3 py-1 mt-28 border border-gray-400 rounded bg-transparent"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
