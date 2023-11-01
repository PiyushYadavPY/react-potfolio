
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import SocialLinks from './components/socialLinks';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/contact';
function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Experience/>
   <Contact/>
   <SocialLinks/>
   </>
  );
}

export default App;
