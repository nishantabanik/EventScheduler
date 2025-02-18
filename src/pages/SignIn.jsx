import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle login
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });

      console.log("Login Response:", response.data); // Debugging

      // Save auth token and username in localStorage
      localStorage.setItem("authToken", response.data.token);

      // ✅ Fix: Adjust this based on the API response structure
      const username = response.data.user?.username || response.data.user?.name || response.data.user?.email;
      localStorage.setItem("username", username);

      navigate("/"); // Redirect to Home page after successful login
      window.location.reload(); // Reload to trigger Navbar updates
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] bg-[#000814] text-white">
      {error && <p className="text-red-500">{error}</p>}

      <form
        onSubmit={handleSignIn}
        className="bg-[#ffd60a] p-8 rounded-lg shadow-lg w-96 text-black space-y-4 border-4 border-black"
      >
        <h2 className="text-3xl font-bold text-center text-[#050505]">Sign In</h2>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded text-white"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded text-white"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#000814] text-[#ffd60a] py-2 rounded hover:bg-[#001d3d] transition-all"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;