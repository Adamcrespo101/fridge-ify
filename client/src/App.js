import './App.css';
import Home from './components/Home';
import PartyRoom from './components/PartyRoom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'



function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PartyRoom" element={<PartyRoom />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
