import Menu from './Menu';
import Home from './Home';
import './input.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from './components/Navbar';
import { About } from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
