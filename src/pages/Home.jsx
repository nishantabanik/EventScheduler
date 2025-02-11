import NewEntryModal from '../components/NewEntryModal.jsx';
import EventList from '../components/EventList.jsx';

const Home = () => {

  return (
    <section id='events'>
      <div className="flex flex-col items-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Banana Events</h1>
        <EventList />
      </div>
        <NewEntryModal />
    </section>
  );
};

export default Home;
