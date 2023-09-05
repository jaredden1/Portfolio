import "./Home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div name="home" className="homeBackground h-[90vh] flex items-center">
      <div className="max-w-[1000px] px-8 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-7xl font-bold text-red-600 dark:text-[#e0f2fe]">
          James Redden
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold dark:text-[#0284c7] text-gray-600">
          Software Engineer.
        </h2>
        <p className="dark:text-[#a3bbf3] text-red-400 font-bold py-4 max-w-700">
          Welcome to my Portfolio
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="dark:text-gray-100 hover:text-gray-100 rounded-sm group border-2 px-6 py-3 my-2 flex items-center hover:dark:bg-sky-600 hover:dark:border-sky-400 hover:bg-red-600 hover:border-red-300 dark:border-sky-100 border-gray-700">
              About Me
              <span className="group-hover:rotate-90 duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
