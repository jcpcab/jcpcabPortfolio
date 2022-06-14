import Home from "./components/Home";
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills";
 
function App() {
  return (
    <div className=' bg-[#17171F]'>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
