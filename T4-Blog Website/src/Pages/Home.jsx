import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase-config";
import { useContext } from "react";
import { AuthContext } from "../Context";

const Home = () => {
  const [postList, setPostList] = useState([]);

  const collectionRef = collection(db, "Posts");

  const { isAuth } = useContext(AuthContext);

  // Delete post
  const DeletePost = async (id) => {
    const docRef = doc(db, "Posts", id);
    try {
      await deleteDoc(docRef);
      setPostList((prevList) => prevList.filter((post) => post.id != id));
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const getPost = async () => {
      const posts = await getDocs(collectionRef);
      setPostList(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPost();
  }, []);

  return (
    <div className="Home-page w-screen h-full mt-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Blog's</h1>
      {postList.map((post) => (
        <div
          key={post.id}
          className="w-1/3 h-1/2 mb-5 flex flex-col justify-between px-3 py-4 bg-slate-300 shadow-lg shadow-black rounded-lg"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{post.Title}</h2>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button
                onClick={() => DeletePost(post.id)}
                className="text-xl font-bold"
              >
                ❌
              </button>
            )}
          </div>
          <p className="postText max-h-[70%] overflow-y-scroll text-gray-900">
            {post.postText}
          </p>
          <h4 className="text-blue-900">@{post.author.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
