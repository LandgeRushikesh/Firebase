import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="Login" element={<Login />} />
              <Route path="Createpost" element={<CreatePost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
