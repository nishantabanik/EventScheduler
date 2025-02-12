import ContactInfo from "../components/ContactInfo"; //import ContactInfo
import LeftSide from "../components/LeftSide"; //import LeftSide
import RightSide from "../components/RightSide"; //import RightSide

const Contact = () => {
  return (
    <>
      <ContactInfo />

      <section className="text-[#000814] mt-5 ml-5 flex">
        <LeftSide />
        <RightSide />
      </section>
    </>
  );
};

export default Contact;
