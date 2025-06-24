import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.5 } },
  enter: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }, // delay to wait for rocket animation
};

export default function PageWrapper({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
