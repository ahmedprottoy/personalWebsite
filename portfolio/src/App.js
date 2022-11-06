import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="App">
      <div className="p-10">
        <Navbar />
      </div>
      <div className="fixed">
        <Sidebar />
      </div>
      <div>
        <div data-aos="zoom-in">
          <Intro />
        </div>
        <div data-aos="zoom-in">
          <About />
        </div>
        <div data-aos="zoom-in">
          <Projects />
        </div>
        <div data-aos="zoom-in">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
