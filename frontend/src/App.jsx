import React from 'react';
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import '@solana/wallet-adapter-react-ui/styles.css'

const App = () => {

  return (
    <Router>
      <main className="max-w-[414px] mx-auto h-screen">
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;