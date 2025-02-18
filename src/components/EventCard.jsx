import { useNavigate } from "react-router";
import { useState } from "react";

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const authToken = localStorage.getItem("authToken"); 
    const [showPopup, setShowPopup] = useState(false);

    // Check if user is logged in, if yes navigate to event details, if not show pop-up
    const handleViewDetails = () => {
        if (!authToken) {
            setShowPopup(true);
            return;
        }
        navigate(`/events/${event.id}`);
    };

    // Image placeholder for all events
    const randomImage = `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/300/200`;
    const imageSrc = event.image || randomImage;

    if (!event) {
        return <div className="card card-compact bg-base-100 text-center w-96 shadow-xl">No Event Data</div>;
    }

    return (
        <div className="card glass bg-[#001D3D] w-96 shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure className="h-40 overflow-hidden">
                <img src={imageSrc} alt={event.title || "No Title"} className="w-full h-full object-cover"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{event.title || "Unknown Event"}</h2>
                <p className="font-thin text-warning">{event.date ? new Date(event.date).toLocaleDateString() : "No Date"} - {event.location || "Unknown Location"}</p>
                <p>{event.description || "No description available."}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleViewDetails} className="btn btn-outline btn-warning">
                        View Details
                    </button>
                </div>
            </div>

            {/* Popup for login prompt */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-lg font-bold text-gray-900">🔒 Login Required</h2>
                        <p className="text-gray-600 mt-2">Please log in to view event details.</p>
                        <div className="flex justify-center mt-4 gap-4">
                            <button 
                                className="btn btn-outline btn-warning"
                                onClick={() => navigate("/signin")}
                            >
                                Login
                            </button>
                            <button 
                                className="btn btn-outline"
                                onClick={() => setShowPopup(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventCard;
