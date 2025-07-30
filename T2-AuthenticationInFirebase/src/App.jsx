import { useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import "./App.css";
import { auth } from "./Firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loggedinEmail, setLoggedinEmail] = useState("");
  const [loggedinPassword, setLoggedinPassword] = useState("");

  const [user,setUser] = useState({})

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })

  const register = async (e) => {
    e.preventDefault()
    try{
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
      console.log(user);
      setRegisterEmail("")
      setRegisterPassword("")
      
    }
    catch(err){
      alert(err.message)
    }
  };

  const login = async (e) => {
    e.preventDefault()
    try{
      const user = await signInWithEmailAndPassword(auth,loggedinEmail,loggedinPassword)
      console.log(user);
      setLoggedinEmail("")
      setLoggedinPassword("")
      
    }
    catch(err){
      alert(err.message)
    }
  };

  const logout = async () => {
    await signOut(auth)
  };

  return (
    <>
      <div className="registration-form">
        <h1>Registration Form</h1>
        <form onSubmit={(e)=>{register(e)}}>
          <input
            type="email"
            placeholder="Enter user name..."
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter the password..."
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="login-form">
        <h1>Login Form</h1>
        <form onSubmit={(e)=>login(e)}>
          <input
            type="email"
            placeholder="Enter user name..."
            value={loggedinEmail}
            onChange={(e) => setLoggedinEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter the password..."
            value={loggedinPassword}
            onChange={(e) => setLoggedinPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="sign-in-user">
        <h4>Signed-in user: {user && user.email}</h4>
        <button onClick={logout}>Sign Out</button>
      </div>
    </>
  );
}

export default App;
