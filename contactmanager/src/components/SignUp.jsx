import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/sign-up",
        {
          email,
          password,
        }
      );
      setTimeout(() => {
        toast.success("Signup success");
        navigate("/sign-in");
      }, 500);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" border-4 flex flex-col gap-8 items-center p-10 "
      >
        <h1 className="font-semibold text-xl text-orange-400 font-serif">
          SignUp
        </h1>
        <div className="flex flex-col gap-4">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border p-3"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border p-3"
          />
        </div>
        <button type="submit">SignUp</button>
      </form>
    </section>
  );
};

export default SignUp;
