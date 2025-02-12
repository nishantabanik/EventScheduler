import { useNavigate } from "react-router";
import logo from "../images/banana.png";
import { Link } from "react-router";

const Navbar = () => {
  const navigate = useNavigate(); // For navigating to different pages

  return (
    <header className="flex bg-[#000814] w-full h-[7rem]">
      <Link to={"/"} className="w-22 md:w-38 hover:scale-105 transition-all ">
        <img
          src={logo}
          alt="Logo"
          className="bg-[#ffd60a]  h-[7rem] ml-[7rem] border-2 border-[#000814] shadow-xl transform transition-transform duration-300 hover:scale-110"
        />
      </Link>

      <div className="w-full flex justify-end items-center mr-10 space-x-4">
        <button
          className="font-serif  btn btn-outline btn-warning text-accent text-2xl px-12 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-110"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>

        <button
          className="font-serif  btn btn-outline btn-warning text-accent text-2xl px-12 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-110"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
