import EventCard from "./EventCard";

const EventList = ({ events }) => {
    return(
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 justify-center">
            {events.length > 0 ? (
                events.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
                <p className="text-center col-span-full text-gray-500">No events found.</p>
            )}
        </div>
    );
};

export default EventList;