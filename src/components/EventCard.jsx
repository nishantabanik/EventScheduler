import { Link } from "react-router";

const EventCard = ({ event }) => {
    const randomImage = `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/300/200`;
    // If the event has no image, use placeholder image
    const imageSrc = event.image || randomImage;

    // If event does not exist, show placeholder information
    if (!event) {
        return <div className="card card-compact bg-base-100 text-center w-96 shadow-xl">No Event Data</div>;
    }

    return (
        <div className="card glass bg-[#001D3D] w-96 shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure className="h-40 overflow-hidden">
                <img 
                    src={imageSrc} 
                    alt={event.title || "No Title"} 
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{event.title || "Unknown Event"}</h2>
                <p className="font-thin text-warning">{event.date ? new Date(event.date).toLocaleDateString() : "No Date"} - {event.location || "Unknown Location"}</p>
                <p className="">{event.description || "No description available."}</p>
                <div className="card-actions justify-end">
                    <Link to={`/events/${event.id}`} className="btn btn-outline btn-warning">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;