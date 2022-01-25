import './App.css';
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'
import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
