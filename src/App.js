import Home from "./components/Home";
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
 
function App() {
  return (
    <div className='lg:px-32 md:px-32 sm:px-14 bg-[#17171F] grid grid-cols-1'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
