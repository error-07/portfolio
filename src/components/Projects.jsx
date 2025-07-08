import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lazy-load modal content
const ProjectModal = lazy(() => import("./ProjectModal")); // we’ll create this

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [theme, setTheme] = useState("dark");

  const projects = [
    {
      title: "ASL Application",
      shortDesc: "Real-time American Sign Language translation using facial data.",
      details: [
        "This application leverages advanced computer vision and machine learning algorithms...",
        "The system incorporates robust gesture recognition models..."
      ]
    },
    {
      title: "Phishing Simulator",
      shortDesc: "Simulated phishing attacks for awareness and training.",
      details: [
        "This platform simulates realistic phishing emails and fake websites...",
        "The simulator provides detailed reports and analytics..."
      ]
    },
    {
      title: "AI Health Assistant",
      shortDesc: "Dual-mode bot for symptom analysis and health-related conversations.",
      details: [
        "This AI-powered health assistant features two integrated modes...",
        "The second mode is a Conversational AI Bot...",
        "Together, these modes make the assistant a valuable self-assessment and educational tool..."
      ]
    }
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Toggle dark/light theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
          className="bg-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-indigo-600 transition"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <motion.section
        id="projects"
        className="min-h-screen px-6 pt-32 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-indigo-500 dark:text-indigo-400 drop-shadow-lg">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl shadow-lg cursor-pointer select-none"
              onClick={() => setSelectedIndex(index)}
            >
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-300">
                {proj.title}
              </h3>
              <p>{proj.shortDesc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lazy-loaded Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center text-white z-50">Loading...</div>}>
            <ProjectModal
              project={projects[selectedIndex]}
              onClose={() => setSelectedIndex(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
