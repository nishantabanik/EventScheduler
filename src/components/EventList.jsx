import { useState, useEffect } from "react";
import EventCard from "./EventCard";

const EventList = () => {
    // State for events
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // State for loading

    // Fetch events from API
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                console.log("📡 Fetching events...");
                const response = await fetch ("http://localhost:3001/api/events?page=1&limit=10");
                console.log("🔄 Response received:", response);

                if (!response.ok) throw new Error (`HTTP Error! Status: ${response.status}`);
                const data = await response.json();
                console.log("✅ Fetched data:", data);

                // Set events received from API
                setEvents(data.results || []);

            } catch (error) {
                console.error("Error fetching events:", error);
                setError(error.message);
            } finally {
                console.log("🛑 Fetching complete.");
                setLoading(false); // Stop loading
            }
        };

        fetchEvents();
    }, [])

    return(
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 justify-center">
            {loading ? (
                <p className="text-center col-span-full text-gray-500">Loading events...</p>
            ) : error ? (
                <p className="text-red-500 text-center col-span-full">⚠️ {error}</p>
            ) : events.length > 0 ? (
                events.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
                <p className="text-center col-span-full text-gray-500">No events found.</p>
            )}
        </div>
    );
};

export default EventList;