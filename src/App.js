import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Header from './components/Header/header';
import Homepage from './components/Home/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';
import CarsList from './components/CarsList/CarsList';





function App() {
  return (
   
      <Router>
        <Routes>
        <Route path="/" element={<Homepage/>} />
          <Route path="header" element={<Header/>} />
          <Route path="LOGIN" element={<Login/>} />
          <Route path="Signup" element={<Signup/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="listing" element={<CarsList  />} />
         

        </Routes>
      </Router>
  
  );
}

export default App;
