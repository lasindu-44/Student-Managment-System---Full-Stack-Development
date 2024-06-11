import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import AddStudent from "./Components/AddStudent.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/add" exact Component={AddStudent}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
