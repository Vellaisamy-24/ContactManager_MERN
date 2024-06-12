import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

const DetailedView = () => {
  const params = useParams();
  const { id } = params;
  const AuthToken = localStorage.getItem("token");
  useEffect(() => {
    fetchDetailById();
  }, [AuthToken]);
  const [mobileNo, setMobileNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const fetchDetailById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/data/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      console.log(response.data);
      setMobileNo(response.data?.singleUser?.mobileNo || "");
      setEmail(response.data?.singleUser?.email || "");
      setFirstName(response.data?.singleUser?.firstName || "");
      setLastName(response.data?.singleUser?.lastName || "");
    } catch (error) {
      console.log(error);
    }
  };
  const updateSingleUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/data/updateData/${id}`,
        {
          email,
          mobileNo,
          firstName,
          lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      console.log(response);
      fetchDetailById();
      setTimeout(() => {
        toast.success("Updated");
      }, 300);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.delete(
        `http://localhost:5000/api/data/deleteData/${id}`,
        {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      console.log(response.data.message)
      setTimeout(() => {
        toast.success("Deleted");
        navigate("/contacts");
      },500);
       
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(e) => updateSingleUser(e)}
      className="flex items-center flex-col justify-center border gap-8 p-3 min-h-screen"
    >
      DetailedView{id}
      {/* <div>Email:{email}</div>
      <div>Mobile:{mobileNo}</div>
      <div>firstName:{firstName}</div>
      <div>lastName:{lastName}</div> */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          className="border p-3"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>MobileNo:</label>
        <input
          type="tel"
          value={mobileNo}
          className="border p-3"
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <div>
        <label>FirstName:</label>
        <input
          type="text"
          value={firstName}
          className="border p-3"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>LastName:</label>
        <input
          type="text"
          value={lastName}
          className="border p-3"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button type="submit">Update</button>
      <button onClick={(e) => deleteUser(e)} type="button">
        Delete
      </button>
    </form>
  );
};

export default DetailedView;
