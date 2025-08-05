import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";
import { Register } from "./Pages/Register";
import { AuthContext } from "./Context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <div className="w-screen h-screen flex items-center flex-col">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="createpost" element={<CreatePost />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
