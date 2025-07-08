import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ASL Application",
      shortDesc: "Real-time American Sign Language translation using facial data.",
      details: (
        <>
          <p>
            This application leverages advanced computer vision and machine learning algorithms to accurately detect and interpret facial expressions and hand gestures associated with American Sign Language (ASL). By processing live video input, it translates these visual cues into real-time text or synthesized speech, facilitating seamless communication between deaf or hard-of-hearing individuals and those unfamiliar with sign language.
          </p>
          <p>
            The system incorporates robust gesture recognition models that adapt to diverse lighting conditions and signer variations, ensuring high accuracy and responsiveness. Its intuitive user interface allows easy interaction, making it suitable for educational environments, public services, and daily conversations. Ultimately, this tool aims to reduce communication barriers and promote inclusivity.
          </p>
         
        </>
      ),
    },
    {
      title: "Phishing Simulator",
      shortDesc: "Simulated phishing attacks for awareness and training.",
      details: (
        <>
          <p>
            This platform simulates realistic phishing emails and fake websites to assess and improve employees' awareness and preparedness against phishing attacks. By mimicking common phishing tactics and social engineering strategies, it helps organizations identify vulnerable individuals and train them to recognize suspicious content.
          </p>
          <p>
            The simulator provides detailed reports and analytics, allowing security teams to evaluate risk levels, track improvements over time, and tailor educational programs effectively. It supports customizable phishing campaigns to match different organizational roles and threat scenarios, making it a versatile tool in cybersecurity defense.
          </p>
          
        </>
      ),
    },
    {
      title: "AI Health Assistant",
      shortDesc: "Dual-mode bot for symptom analysis and health-related conversations.",
      details: (
      <>
        <p>
          This AI-powered health assistant features two integrated modes to support users in understanding their health conditions. The first mode is a <strong>Symptom Checker</strong>, where users can input one or more symptoms and receive a list of possible health issues or conditions based on medical data and pattern analysis.
        </p>
        <p>
        The second mode is a <strong>Conversational AI Bot</strong> designed to answer health-related questions in real-time. It uses natural language understanding to provide clear, context-aware responses—explaining symptoms, giving general health advice, and helping users decide if medical attention is needed.
        </p>
        <p>
        Together, these modes make the assistant a valuable self-assessment and educational tool, suitable for everyday health concerns, early triage support, and wellness guidance. It emphasizes accessibility, privacy, and ease of use.
        </p>
        </>
    ),
  }

  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <motion.section
        id="projects"
        className="min-h-screen px-6 pt-32 py-20 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-indigo-400 drop-shadow-lg">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 p-8 rounded-3xl shadow-lg cursor-pointer select-none"
              onClick={() => setSelectedIndex(index)}
            >
              <h3 className="text-2xl font-semibold mb-3 text-indigo-300">{proj.title}</h3>
              <p>{proj.shortDesc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 rounded-3xl
                bg-gradient-to-br from-gray-900 via-black to-gray-900
                shadow-[0_0_15px_4px_rgba(99,102,241,0.7)]
                ring-2 ring-indigo-500/70
                text-gray-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-indigo-400 hover:text-indigo-600
                  text-3xl font-bold transition-all duration-300
                  hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                aria-label="Close"
                title="Close"
              >
                &times;
              </button>

              <h3 className="text-3xl font-extrabold mb-6 text-indigo-400 drop-shadow-lg">
                {projects[selectedIndex].title}
              </h3>

              <div className="max-w-none space-y-4 text-gray-300">
                {projects[selectedIndex].details}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
