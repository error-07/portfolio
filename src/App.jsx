import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageWrapper from "./components/PageWrapper";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-blue-700 to-purple-900 text-white font-poppins">
      <Router>
        <Navbar />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
