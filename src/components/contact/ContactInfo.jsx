const ContactInfo = () => {
  return (
    <section className="text-accent">
      <h2 className="text-6xl flex justify-center underline mb-8 italic ">
        Contact Us
      </h2>

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
  );
};

export default ContactInfo;
