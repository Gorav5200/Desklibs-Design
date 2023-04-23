import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./Pages/Business";
import Subject from "./Pages/Subject";
import SearchAppBar from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <SearchAppBar />
     
      <Routes>
        <Route path="/" element={<Business />} />
        <Route path="/subject" element={<Subject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
