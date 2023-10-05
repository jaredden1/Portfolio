import "./Header.css";
import { Link } from "react-router-dom";
import { DarkMode } from "./DarkMode";

const Header = (props) => {
  return (
    <header>
      <nav
        className="flex items-center justify-between box-border w-screen p-4 font-bold text-gray-800 dark:text-gray-100 h-[10vh]"
        id="top"
      >
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/ABOUT" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/PROJECTS" className="hover:text-blue-500">
            Projects
          </Link>
        </div>
        <DarkMode />
      </nav>
    </header>
  );
};

export default Header;