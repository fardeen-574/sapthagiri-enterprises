import { BrowserRouter as Router,Routes,Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Home from './pages/Home/Home'
import AboutPage from './pages/About/AboutPage'
import MachineDesign from './pages/MachineDesign/MachineDesign'
import LaserCutting from './pages/LaserCutting/LaserCutting'
import Bending from './pages/Bending/Bending'
import Milling from './pages/Milling/Milling'
import Turning from './pages/Turning/Turning'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Project/Projects'
import { useEffect } from 'react';

function App() {
  const ScrollToTop = () =>{
    const {pathname} = useLocation();
    useEffect(()=>{
      window.scrollTo(0,0);
    },[pathname]);

    return null;
  }


  return (
    <Router>
      <Header/>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/machine-design' element={<MachineDesign/>}/>
        <Route path='/cnc-laser-cutting' element={<LaserCutting/>}/>
        <Route path='/cnc-bending' element={<Bending/>}/>
        <Route path='/cnc-milling' element={<Milling/>}/>
        <Route path='/cnc-turning' element={<Turning/>}/>
        <Route path='/cnc-turning' element={<Turning/>}/>
        <Route path='/cnc-turning' element={<Turning/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
