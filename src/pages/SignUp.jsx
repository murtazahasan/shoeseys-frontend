import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    console.log("Sign up initiated with email:", email, "username:", username);
    try {
      console.log("Sending sign up request...");
      await axios.post("http://localhost:4000/user/signup", {
        email,
        password,
        username,
      });
      console.log("Sign up successful!");
      enqueueSnackbar("Sign up successful! Please sign in.", {
        variant: "success",
      });
      navigate("/login");
    } catch (err) {
      console.error("Sign up failed:", err);
      if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.message === "User already exists"
      ) {
        console.log("User already exists error.");
        enqueueSnackbar("Username or email already in use!", {
          variant: "error",
        });
      } else {
        console.log("General sign up error.");
        enqueueSnackbar(err.response?.data?.message || "Sign up failed", {
          variant: "error",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg my-10 shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          {/* Username field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Sign Up button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <p className="mt-4 text-center">
          Already have an account?
          <Link to="/login" className="mx-2 text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
