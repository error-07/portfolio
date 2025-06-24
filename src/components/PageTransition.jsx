import { motion, AnimatePresence } from "framer-motion";

const rocketVariants = {
  initial: { x: "120vw", y: 0, rotate: 45, opacity: 0 },
  animate: {
    x: "-120vw",
    y: [0, -30, 30, -30, 30, 0], // funky up-down wiggle
    rotate: [45, 20, 60, 10, 45],
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function PageTransition() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-1/2 left-0 z-[9999] pointer-events-none"
        style={{ translateY: "-50%" }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={rocketVariants}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3069/3069175.png"
          alt="Rocket"
          className="w-16 h-16"
        />
      </motion.div>
    </AnimatePresence>
  );
}
