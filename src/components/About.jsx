import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    className="min-h-screen px-8 pt-32 py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold mb-8 text-indigo-400 drop-shadow-md">About Me</h2>
    <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
      <p>
        I'm a passionate Software Developer with over 3 years of experience in building robust backend systems using technologies like SQL, Java, Spring, and C#. I also have experience with ReactJS, allowing me to contribute across the full stack.
      </p>
      <p>
        My work focuses on creating scalable, efficient applications — from server-side logic to intuitive front-end interfaces. Some of my key projects include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Real-Time ASL (American Sign Language) Application:</strong> translates between facial data and sign language.
        </li>
        <li>
          <strong>Phishing Simulation Platform:</strong> designed to detect and evaluate the security awareness of users.
        </li>
      </ul>
      <p>
        I’m always exploring new tools, writing clean code, and building solutions that make a difference.
      </p>
    </div>
  </motion.section>
);

export default About;
