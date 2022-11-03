import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Intro from "./Components/Intro";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <div className="p-10">
        <Navbar />
      </div>
      <div className="fixed">
        <Sidebar />
      </div>
      <>
        <Intro />
        <About />
      </>
    </div>
  );
}

export default App;
