import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoIosContact } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
const Contacts = () => {
  const AuthToken = localStorage.getItem("token");
  useEffect(() => {
    fetchContacts();
  }, []);
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
    <div className="p-3">
      <section className="">
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
        <div className="fixed w-full p-3 md:p-5 border-b  bg-white top-0 right-0 z-10">
          <Link className="flex items-center " to="/addContacts">
            <IoIosAdd className="w-20 h-10" />
            {/* <FaAddressBook className="w-20 h-10" /> */}AdContact
          </Link>
        </div>

        <div className="bg-neutral-200 pt-10 md:pt-20">
          {contact && contact.length > 0 ? (
            contact.map((data, index) => (
              <Link key={index} to={`/contacts/${data._id}`}>
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
            ))
          ) : (
            <p className="font-bold text-orange-500 text-xl   text-center p-10 flex items-center justify-center min-h-screen">
              No contacts
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contacts;
