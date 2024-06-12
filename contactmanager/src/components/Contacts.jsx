import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoIosContact } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Contacts = () => {
  const AuthToken = localStorage.getItem("token");
  useEffect(() => {
    fetchContacts();
  }, [AuthToken]);
  const [contact, setContact] = useState([]);
  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/data/getData",
        {
          headers: { Authorization: `Bearer ${AuthToken}` },
        }
      );
      console.log(response);
      setContact(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section>
        {/* {contact &&
          contact.map((data, index) => (
            <>
              <h1 key={index}>
                {data.mobileNo}
                {data.email}
                lastName: {data.lastName}
                firstName: {data.fistName}
              </h1>
            </>
          ))} */}

        <div className="">
          {contact.map((data) => (
            <Link to={`/contacts/${data._id}`}>
              <div className="py-5 flex items-center">
                <div>
                  <IoIosContact className="h-10 w-20" />
                </div>
                <div>
                  <div className="flex  gap-4 ">
                    <h1>FirstName:{data.firstName}</h1>
                    <p>Last Name:{data.lastName}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>
                      <FaMobileRetro />
                    </span>
                    <p>{data.mobileNo}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contacts;
