import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase-config";
import { Link, useNavigate } from "react-router-dom";

export const Register = ({setIsAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsAuth(true)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-1/3 h-1/2 shadow-lg shadow-black rounded-2xl px-10 py-12 border-2 border-black flex flex-col items-center justify-center mt-10">
      <form onSubmit={(e) => HandleRegister(e)} className="w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl mb-3">Sign Up</h1>
        <input
          className="w-full px-4 py-2 mb-3 border-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
        />
        <input
          className="w-full px-4 py-2 mb-3 border-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password..."
          required
        />
        <Link
          to="/login"
          className="w-full text-blue-500 underline mb-3 text-center"
        >
          Already have an account
        </Link>
        <button
          className="w-full px-4 py-2 bg-red-600 text-white mb-3 border-2 border-red-600 font-bold"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
