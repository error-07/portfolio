import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-blue-700 to-purple-900 text-white px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Hi, I'm Mohammad Abdul Baseet
        </h1>
        <p className="text-2xl mb-10 tracking-wide drop-shadow-md" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Full Stack Software Developer committed to delivering clean, scalable backend architecture and intuitive user interfaces.
        </p>
        
      </div>
    </motion.section>
  );
};

export default Home;
