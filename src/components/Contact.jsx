import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    id="contact"
    className="min-h-screen px-6 pt-32 py-20 text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold mb-8 text-indigo-400 drop-shadow-lg">
      Contact Me
    </h2>
    <p className="max-w-3xl mx-auto">
      Please reach out via email or social media for any inquiries.
    </p>
  </motion.section>
);

export default Contact;
