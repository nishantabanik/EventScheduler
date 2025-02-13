import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

        // Image placeholder for events
        const randomImage = `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/300/200`;

    useEffect(() => {
        // Check if the user is logged in
        const authToken = localStorage.getItem("authToken");

        if (!authToken) {
            alert("You should Login to our Banana Club");
            navigate("/signin");
            return;
        }

        const fetchEventDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/events/${id}`);
                if (!response.ok) throw new Error('Failed to fetch event details.');
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetails();
    }, [id, navigate]);

    if (loading) return <p>Loading event details...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!event) return <p>No event found.</p>;

    return (
        <div className="max-w-2xl mx-auto flex-col gap-8 h-[800px] shadow-2xl my-16 rounded-lg overflow-hidden ">
            <div>
                <figure className="h-1/2 mb-2 overflow-hidden">
                    <img src={randomImage} className="w-full h-full object-cover"/>
                </figure>
            </div>
            <div className='p-6'>
                <div className='mb-6'>
                    <h1 className="text-4xl text-center font-black mb-4">{event.title}</h1>
                </div>

                <div className='flex gap-2 my-4'>
                    <p className="font-light p-4 badge badge-warning badge-outline">
                        🗓️ {new Date(event.date).toLocaleDateString()} 
                    </p>
                    <p className="font-light p-4 badge badge-warning badge-outline">
                        📍 {event.location}
                    </p>
                </div>

                <div className=''>
                    <p className="mb-8">{event.description}</p>
                    <div className='mt-auto flex justify-end'>
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-outline btn-warning"
                    >
                        Back
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
