import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase-config";
import { Link, useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuth(true)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const HandleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIsAuth(true)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-1/3 h-[60%] shadow-lg shadow-black rounded-2xl px-10 py-12 border-2 border-black flex flex-col mt-10">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={(e) => HandleLogin(e)}
        >
          <h1 className="font-bold text-3xl mb-3">Log In</h1>
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
          <Link to="/register" className="text-blue-500 underline mb-3">
            Don't have an Account
          </Link>
          <button
            className="w-full px-4 py-2 bg-red-600 text-white mb-3 border-2 border-red-600 font-bold"
            type="submit"
          >
            Log In
          </button>
        </form>
        <hr />
        <p className="w-full text-center mb-3">Or login with</p>
        <button
          onClick={HandleGoogleLogin}
          className="w-full px-4 py-2 bg-red-600 text-white mb-3 border-2 border-red-600 font-bold"
        >
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Login;
