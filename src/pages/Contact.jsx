import ContactInfo from "../components/contact/ContactInfo"; //import ContactInfo
import LeftSide from "../components/contact/LeftSide"; //import LeftSide
import RightSide from "../components/contact/RightSide"; //import RightSide

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
