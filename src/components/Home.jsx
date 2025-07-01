import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const fullText =
    "Full Stack Software Developer committed to delivering clean, scalable backend architecture and intuitive user interfaces.";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 50; // ms per character (faster for your need)
    const timer = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-blue-700 to-purple-900 text-white px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-3xl">
        <h1
          className="text-6xl font-extrabold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Hi, I'm Mohammad Abdul Baseet
        </h1>
        <p
          className="text-2xl mb-10 tracking-wide drop-shadow-md"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </motion.section>
  );
};

export default Home;
