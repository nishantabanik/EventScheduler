import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const Contact = () => {
  return (
    <>
      <section className="text-[#000814]">
        <h2 className="text-5xl flex justify-center  ">Contact Us</h2>

        <ul className="ml-5">
          <li className="text-2xl flex justify-center">
            Email Berlin: <a href="mailto:berlin@banana.de">berlin@banana.de</a>
          </li>
          <li className="text-2xl flex justify-center">
            Email Hannover:{" "}
            <a href="mailto:hannover@banana.de">hannover@banana.de</a>
          </li>

          <li className="text-2xl flex justify-center">
            Phone: <a href="tel:+491234567890">+49 123 456 7890</a>
          </li>
        </ul>
      </section>

      <section className="text-[#000814] mt-5 ml-5 flex">
        <LeftSide />
        <RightSide />
      </section>
    </>
  );
};

export default Contact;
