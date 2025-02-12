import { useState, useEffect } from "react";
import banner from "../images/banner.png";

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch Events from API based on search
    useEffect(() => {
        const fetchEvents = async () => {
            if (searchTerm.length < 3) {
                onSearch(null); // Reset events, when search field is empty
                return;
            }

            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3001/api/events?search=${searchTerm}`);
                if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
                
                const data = await response.json();
                console.log("🔎 API Search Results:", data.results);

                onSearch(data.results || []);
            } catch (error) {
                console.error("Error fetching search results:", error);
                onSearch([]); // Display empty list when error occurs
            } finally {
                setLoading(false);
            }
        };

        const debounceSearch = setTimeout(fetchEvents, 500); // 500ms delay for better performace
        return () => clearTimeout(debounceSearch); // Cleanup for debounce
    }, [searchTerm, onSearch]);

    return (
        <div
            className="hero h-[600px] border-t border-b -mt-4"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">Hello Banana Fam</h1>
                    <p className="mb-5 text-white text-2xl font-thin">
                        Whether you're peeling or standing - with us you'll slide straight into the next big event!
                    </p>
                    <input
                        type="text"
                        placeholder="Search for events"
                        className="input input-bordered input-lg input-warning w-full max-w-xs mt-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {loading && <p className="text-yellow-400 mt-2">Loading events...</p>}
                </div>
            </div>
        </div>
    );
};

export default Header;