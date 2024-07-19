import React, { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
        console.log(user.email)
        setIsAuthenticated(true);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {isAuthenticated ? (
        <button
          className="bg-red-500 px-8 py-2 text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-blue px-8 py-2 text-white"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
