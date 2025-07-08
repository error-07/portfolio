import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 rounded-3xl
        bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900
        text-gray-900 dark:text-gray-300
        shadow-[0_0_15px_4px_rgba(99,102,241,0.7)]
        ring-2 ring-indigo-500/70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-600 text-3xl font-bold transition-all duration-300"
        >
          &times;
        </button>

        <h3 className="text-3xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-400 drop-shadow-lg">
          {project.title}
        </h3>

        <div className="space-y-4">
          {project.details.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
