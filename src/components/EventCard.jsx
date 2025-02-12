import { Link, useNavigate } from "react-router";

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const randomImage = `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/300/200`;
    const imageSrc = event.image || randomImage;

    const handleEventClick = (e) => {
        e.preventDefault();
        const authToken = localStorage.getItem("authToken");

        if (!authToken) {
            // Show DaisyUI Alert
            document.getElementById("alert-modal").showModal();
        } else {
            navigate(`/events/${event.id}`);
        }
    };

    if (!event) {
        return <div className="card card-compact bg-base-100 text-center w-96 shadow-xl">No Event Data</div>;
    }

    return (
        <>
            <div className="card glass bg-[#001D3D] w-96 shadow-xl transform transition-transform duration-300 hover:scale-105">
                <figure className="h-40 overflow-hidden">
                    <img src={imageSrc} alt={event.title || "No Title"} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{event.title || "Unknown Event"}</h2>
                    <p className="font-thin text-warning">
                        {event.date ? new Date(event.date).toLocaleDateString() : "No Date"} - {event.location || "Unknown Location"}
                    </p>
                    <p className="">{event.description || "No description available."}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning" onClick={handleEventClick}>
                            View Details
                        </button>
                    </div>
                </div>
            </div>

            {/* DaisyUI Alert Modal */}
            <dialog id="alert-modal" className="modal">
                <div className="modal-box bg-yellow-500 text-black">
                    <h3 className="font-bold text-xl">You should Login to our Banana Club 🍌</h3>
                    <p className="py-4">Please Sign In to view event details.</p>
                    <div className="modal-action">
                        <button className="btn btn-black" onClick={() => document.getElementById("alert-modal").close()}>
                            Close
                        </button>
                        <button className="btn btn-warning" onClick={() => navigate("/signin")}>
                            Sign In
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default EventCard;
