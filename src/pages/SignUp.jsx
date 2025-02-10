import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                throw new Error("Failed to sign up. Please try again.");
            }

            alert("Sign up successful!");
            navigate("/signin"); // Redirect to Sign In after successful signup
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-[60vh] bg-[#000814] text-white">
            <form
                onSubmit={handleSignUp}
                className="bg-[#ffd60a] p-8 rounded-lg shadow-lg w-96 text-black space-y-4 border-4 border-black"
            >
                <h2 className="text-3xl font-bold text-center text-[#000814]">Sign Up</h2>

                {error && <p className="text-red-600 text-center">{error}</p>}

                <input
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-md bg-[#000814] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-md bg-[#000814] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 rounded-md bg-[#000814] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-[#000814] text-[#ffd60a] py-3 rounded-md font-bold hover:bg-[#333333] transition duration-300">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;