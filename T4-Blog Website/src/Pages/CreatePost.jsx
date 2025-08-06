import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../Firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const collectionRef = collection(db, "Posts");
  const navigate = useNavigate();

  const createPost = async () => {
    try {
      if (title && postText) {
        await addDoc(collectionRef, {
          Title: title,
          postText,
          author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid,
          },
        });
        setTitle("");
        setPostText("");
        navigate("/");
      } else {
        throw new Error("Enter the details...");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="w-screen h-full flex justify-center">
      <div className="mt-10 border-2 shadow-xl shadow-black px-3 py-4 flex flex-col justify-center items-center w-1/3 h-1/2">
        <h1 className="text-3xl font-bold mb-3">Create a post</h1>
        <input
          type="text"
          placeholder="Enter the Title of the Blog..."
          className="w-full mb-3 border-2 px-2 py-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="write here..."
          rows={10}
          className="w-full mb-3 border-2 px-2 py-3"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>
        <button
          onClick={createPost}
          className="px-4 py-2 bg-black border-2 border-black text-white font-bold rounded-lg"
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
