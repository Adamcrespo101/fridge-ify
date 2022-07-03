import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Pantry from './components/Pantry';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pantry" element={<Pantry />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
