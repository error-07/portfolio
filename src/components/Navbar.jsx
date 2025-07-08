import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (path) =>
    `block px-4 py-2 rounded-xl transition-all duration-200 font-medium ${
      location.pathname === path
        ? "bg-indigo-500 text-white shadow"
        : "text-white hover:bg-indigo-600 hover:text-white"
    }`;

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 10 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-indigo-900 bg-opacity-80 py-2 shadow-xl scale-[0.98]"
          : "bg-indigo-900 bg-opacity-60 py-4"
      } backdrop-blur-md rounded-3xl mx-4 px-6`}
    >
      <div className="flex justify-between items-center">
        <h1
          className={`font-bold text-indigo-400 transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          My Portfolio
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
          <Link to="/" className={linkStyle("/")}>Home</Link>
          <Link to="/about" className={linkStyle("/about")}>About</Link>
          <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
          <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col mt-4 gap-2 md:hidden"
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={linkStyle("/about")}>
            About
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className={linkStyle("/projects")}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className={linkStyle("/contact")}>
            Contact
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
