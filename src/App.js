import { useEffect, useState } from 'react';
import './App.css';
import PlayerDetails from './modules/PlayerDetails';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import About from './modules/About';
import Technology from './modules/Technology';
import Contact from './modules/Contact';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }


  }, [window.innerWidth])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isMobile={isMobile} />
        <Routes>
          <Route path='/' element={<Home isMobile={isMobile} />} />
          <Route path='/details' element={<PlayerDetails isMobile={isMobile} />} />
          <Route path='/about' element={<About isMobile={isMobile} />} />
          <Route path='/technology' element={<Technology isMobile={isMobile} />} />
          <Route path='/contact' element={<Contact isMobile={isMobile} />} />
        </Routes>
      </BrowserRouter>
      {/* <Home isMobile={isMobile}/>
      <Prediction isMobile={isMobile}/> */}
    </div>
  );
}

export default App;
