import { Link } from "react-router"; //import link from react-router
const ContactBtn = () => {
  return (
    <div className="md:w-full flex justify-center lg:pb-3 md:mb-5 pb-5 xl:pb-0 xl:justify-start xl:items-center ">
      <Link to="/contact">
        <button className=" font-serif  btn btn-outline btn-warning text-accent text-2xl px-12 rounded-xl hover:text-3xl">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default ContactBtn;
