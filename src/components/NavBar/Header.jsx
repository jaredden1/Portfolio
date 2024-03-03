import "./Header.css";
import { Link } from "react-router-dom";
import { DarkMode } from "../Modes/DarkMode";

const logo = ""; // add my logo here later.

const Header = (props) => {
  return (
    <header>
      <nav
        className="flex items-center justify-between box-border w-screen p-4 font-bold h-[10vh]"
        id="top"
      >
        <img src={logo} className="logo" />
        <div className="nav-link flex w-full justify-between">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
        <DarkMode />
      </nav>
    </header>
  );
};

export default Header;
