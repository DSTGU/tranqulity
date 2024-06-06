import './App.css';
import './Style.css';
import Hero from './Pages/Hero';
import Navbar from './Pages/Navbar';
import Browse from './Pages/Browse';
import Rent from './Pages/Rent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch separately
import HotelPage from './Pages/HotelPage';
import { useState } from 'react';
import Login from './Pages/Login';

function App() {
  
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
    console.log(showLogin)
  };

  return (
    
    <div className="App">

      <Router>
          <Navbar toggleLoginPopup={toggleLoginPopup}></Navbar>

          <Hero></Hero>

          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/hotel/:hotelId" element={<HotelPage />} />
          </Routes>

          <Rent></Rent>
          {showLogin && <Login toggleLoginPopup={toggleLoginPopup} />}

      </Router>

    </div>



  );
}

export default App;
