import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-600 mb-2">
                Date: {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="mb-4">{event.description}</p>
            <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Back
            </button>
        </div>
    );
};

export default EventDetails;
