import './App.css';
import Home from './components/Home';
import PartyRoom from './components/PartyRoom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {

  const [token, setToken] = useState("")
  const clientId = '5326b87d878e436d8c9c8c94722308fb'
  const clientSecret = 'f51065a9f24246d0a7026ee4c89ee3f8'
  const redirect = "http://localhost:4000"
  function play (){
    
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PartyRoom" element={<PartyRoom axios={axios}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
