import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contacts";
import DetailedView from "./components/DetailedView";
import  {Toaster}  from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:id" element={<DetailedView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
