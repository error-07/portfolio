import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-indigo-400">Mohammad Baseet</div>
        <div className="flex space-x-4">
          <NavButton to="/" label="Home" className={buttonClasses} />
          <NavButton to="/about" label="About" className={buttonClasses} />
          <NavButton to="/projects" label="Projects" className={buttonClasses} />
          <NavButton to="/contact" label="Contact" className={buttonClasses} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
const buttonClasses = "text-lg font-medium hover:text-indigo-400 transition-colors duration-300";