import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";
import { Register } from "./Pages/Register";

function App() {
  const [isAuth,setIsAuth] = useState(false)

  return (
    <>
      <div className="w-screen h-screen flex items-center flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout isAuth = {isAuth}/>}>
              <Route path="" element={<Home />} />
              <Route path="login" element={<Login setIsAuth={setIsAuth}/>} />
              <Route path="register" element={<Register setIsAuth={setIsAuth}/>} />
              <Route path="createpost" element={<CreatePost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
