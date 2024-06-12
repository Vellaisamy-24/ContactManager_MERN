import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const AddContact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const AuthToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const addContact = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/data/createData",
        {
          email,
          lastName,
          firstName,
          mobileNo,
        },
        {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      console.log(response);
      setTimeout(() => {
        toast.success("Created");
        navigate("/contacts");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(e) => addContact(e)}
      className="flex items-center flex-col min-h-screen border-4 justify-center gap-8"
    >
      <h1 className="font-bold text-xl text-orange-400 shadow-xl border p-3 rounded-lg ">
        AddContacts
      </h1>
      <div>
        <label>Email</label>
        <input
          className="border p-3"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>FirstName</label>
        <input
          className="border p-3"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>LastName</label>
        <input
          className="border p-3"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>MobileNo</label>
        <input
          className="border p-3"
          type="tel"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="font-semibold hover:scale-105 p-3 border text-green-500 transition-all hover:duration-300 hover:text-orange-400"
      >
        Add+
      </button>
    </form>
  );
};

export default AddContact;
