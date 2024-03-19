import './Components/Assets/Global.css'
import Menu from './Components/Menu';
import Particle from './Components/Particle';
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Services from './Components/Pages/Services'
import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Particle />
        <Menu />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
