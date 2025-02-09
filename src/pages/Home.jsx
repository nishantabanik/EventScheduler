import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const [events, setEvents] = useState([]); // State to store events
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  // Function to fetch events from API
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/events');
      const data = await response.json();
      console.log('Fetched Data:', data); // Debugging: Check the API response

      // Check if data is an array or an object with an events property
      setEvents(Array.isArray(data) ? data : data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Redirect to event details page
  const handleCardClick = (id) => {
    navigate(`/events/${id}`);
  };

  if (loading) return <p>Loading events...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(events) && events.length > 0 ? (
        events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleCardClick(event.id)}
          >
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-800 mt-2 line-clamp-3">{event.description}</p>
          </div>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default Home;
