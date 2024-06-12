import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/sign-in",
        {
          email,
          password,
        }
      );
      console.log(response);
      console.log(response.data.token);
      console.log(response.data.message);
      const token = response.data.token;

      localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/contacts");
      });
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
          SignIn
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
        <button type="submit">SignIn</button>
      </form>
    </section>
  );
};

export default SignUp;
