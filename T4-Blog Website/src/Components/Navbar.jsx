import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase-config";

const Navbar = ({ isAuth }) => {
  console.log(isAuth);
  
  const handleSignOut = async () => {
    await signOut(auth);
  };
  return (
    <nav className="w-screen bg-slate-900 text-white font-semibold px-10 py-6 flex justify-between items-center">
      <div>
        <NavLink to="/">Logo</NavLink>
      </div>
      <ul className="flex justify-end items-center">
        <li className="mr-6">
          <NavLink to="/">Home</NavLink>
        </li>
        {isAuth ? (
          <li>
            <button
              onClick={handleSignOut}
              className="mr-6 bg-red-700 border-2 border-red-700 px-5 py-2 rounded-lg font-bold"
            >
              Sign Out
            </button>
          </li>
        ) : (
          <li>
            <NavLink
              to="/login"
              className="mr-6 bg-red-700 border-2 border-red-700 px-5 py-2 rounded-lg font-bold"
            >
              Log in
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/createpost"
            className="mr-6 bg-red-700 border-2 border-red-700 px-5 py-2 rounded-lg font-bold"
          >
            Create Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
