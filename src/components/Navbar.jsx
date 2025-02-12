import { useNavigate } from "react-router";
import logo from "../images/banana.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  // Check for logged-in user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    console.log("Stored Username:", storedUser); // ✅ Debugging
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  // Handle Sign Out
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/"); // Redirect to Home page
    window.location.reload(); // Force reload to update Navbar UI
  };

  return (
    <header className="flex bg-[#000814] w-full h-[7rem]">
      <a className="w-22 md:w-38 hover:scale-105 transition-all">
        <img
          src={logo}
          alt="Logo"
          className="bg-[#ffd60a] h-[7rem] ml-[7rem] border-2 border-[#000814]"
        />
      </a>

      <div className="w-full flex justify-end items-center mr-10 space-x-4">
        {username ? (
          <>
            <span className="text-white text-2xl font-bold">
              Welcome {username}
            </span>
            <button
              className="btn btn-outline btn-warning text-accent text-2xl px-12 rounded-xl hover:text-3xl"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline btn-warning text-accent text-2xl px-12 rounded-xl hover:text-3xl"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>

            <button
              className="btn btn-outline btn-warning text-accent text-2xl px-12 rounded-xl hover:text-3xl"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;