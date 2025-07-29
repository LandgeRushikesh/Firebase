import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./Firebase-config";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

function App() {
  const [newName, setnewName] = useState("");
  const [newAge, setnewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "user");

  // Reading user from db
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUser();
  }, []);

  // adding new user
  const createUser = async (e) => {
    e.preventDefault()
    await addDoc(userCollectionRef,{name:newName,Age:Number(newAge)})
    setnewName("")
    setnewAge(0)
  };

  // Updating user
  const updateUser = async (id,age) =>{
    const userDocRef = doc(db,"user",id)
    const newField = {Age:age+1};
    await updateDoc(userDocRef,newField)
  }

  // Deleting user
  const deleteUser = async (id) =>{
    const userDocRef = doc(db,"user",id)
    await deleteDoc(userDocRef)
  }

  return (
    <>
      <form onSubmit={(e)=>createUser(e)}>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setnewName(e.target.value)}
          value={newName}
        />
        <input
          type="number"
          placeholder="Enter your age..."
          onChange={(e) => setnewAge(e.target.value)}
          value={newAge}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {users.map((user) => (
          <div>
            <h1>Name: {user.name} </h1>
            <h1>Age: {user.Age} </h1>
            <button onClick={()=>{updateUser(user.id,user.Age)}}>Increment age</button>
            <button onClick={()=>{deleteUser(user.id)}}>DeleteUser</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
