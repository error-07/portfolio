import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 pt-32 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-indigo-400 drop-shadow-lg">Contact Me</h2>

      <div className="max-w-xl w-full space-y-8">
        {/* Email */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-indigo-500/50 transition-shadow cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-indigo-400 text-3xl" />
          <a href="mailto:baseet52@example.com" className="text-lg break-all hover:underline">
            baseet52@gmail.com
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-indigo-500/50 transition-shadow cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <FaPhone className="text-indigo-400 text-3xl" />
          <a href="tel:+1234567890" className="text-lg hover:underline">
            +966 582991575
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-indigo-500/50 transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <FaMapMarkerAlt className="text-indigo-400 text-3xl" />
          <p className="text-lg">Riyadh, Saudi Arabia</p>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-indigo-500/50 transition-shadow cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="text-indigo-400 text-3xl" />
          <a
            href="https://www.linkedin.com/in/mohammad-baseet-110262214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:underline"
          >
            linkedin.com/in/mohammad-baseet-110262214
          </a>
        </motion.div>

        {/* GitHub */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-indigo-500/50 transition-shadow cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="text-indigo-400 text-3xl" />
          <a
            href="https://github.com/error-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:underline"
          >
            github.com/error-07
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
