import { signInWithGoogle } from './Firebase-config'
import { auth } from './Firebase-config'
import './App.css'

function App() {

  return (
    <>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilepic")}/>
    </>
  )
}

export default App
