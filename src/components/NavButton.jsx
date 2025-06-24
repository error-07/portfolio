import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "./PageTransition";

const NavButton = ({ to, label, className }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(to);
        setIsTransitioning(false);
      }, 2000); // match animation duration
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isTransitioning}
        className={className}
      >
        {label}
      </button>
      {isTransitioning && <PageTransition />}
    </>
  );
};

export default NavButton;
