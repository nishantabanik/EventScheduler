import { Link } from "react-router"; //import link from react-router
const ContactBtn = () => {
  return (
    <div className="md:w-full flex justify-center lg:pb-3 md:mb-5 pb-5 xl:pb-0 items-center h-full xl:items-center ">
      <Link to="/contact">
        <button className=" font-serif  btn btn-outline btn-warning text-accent text-2xl px-12 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-110">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default ContactBtn;
