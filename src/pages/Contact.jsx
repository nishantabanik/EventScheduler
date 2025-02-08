const Contact = () => {
  const handleClick = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log(name);
    console.log(email);
    console.log(message);
  };

  return (
    <>
      <section className="text-[#000814]">
        <h2 className="text-5xl flex justify-center  ">Contact Us</h2>

        <ul className="ml-5">
          <li>
            Email Berlin: <a href="mailto:berlin@banana.de">berlin@banana.de</a>
          </li>
          <li>
            Email Hannover:{" "}
            <a href="mailto:hannover@banana.de">hannover@banana.de</a>
          </li>

          <li>
            Phone: <a href="tel:+491234567890">+49 123 456 7890</a>
          </li>
        </ul>
      </section>

      <section className="text-[#000814] mt-5 ml-5">
        <form action="">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="w-[30%] bg-[#003566] text-[#ffd60a]"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            className="w-[30%] bg-[#003566] text-[#ffd60a]"
          />{" "}
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            className="w-[30%] bg-[#003566] text-[#ffd60a]"
          ></textarea>{" "}
          <br />
          <div className="">
            <button
              type="submit"
              className="text-[#ffd60a] bg-[#003566]  text-2xl px-12 rounded-xl hover:text-3xl"
              onClick={handleClick}
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
