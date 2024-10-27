import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomDetail from './components/Home/RoomDetail';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />              
        <Route path="/room/:id" element={<RoomDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App
