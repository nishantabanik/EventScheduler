import { Link } from "react-router"; //import link from react router

const BackToHome = () => {
  return (
    <div className="mt-2">
      <Link to="/" className="text-primary hover:underline">
        <button
          type="submit"
          className="btn btn-outline btn-warning text-accent  text-lg hover:text-xl ml-[42%] lg:ml-[0] lg:text-2xl px-12 rounded-xl lg:hover:text-3xl"
        >
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default BackToHome;
