import { Link } from "react-router";

const LeftSide = () => {
  return (
    <form action="" className="w-full justify-center items-center lg:w-[50%]">
      <div className="ml-[42%] lg:ml-[0]">
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-[45%] bg-[#003566] text-[#ffd60a]"
        />
        <br />
      </div>
      <div className="ml-[42%] lg:ml-[0]">
        <label htmlFor="secondName">Second Name:</label>
        <br />
        <input
          type="text"
          id="secondName"
          name="secondName"
          className="w-[45%] bg-[#003566] text-[#ffd60a]"
        />

        <br />
      </div>
      <div className="ml-[42%] lg:ml-[0]">
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="w-[45%] bg-[#003566] text-[#ffd60a]"
        />{" "}
        <br />
      </div>
      <div className="ml-[42%] lg:ml-[0]">
        <label htmlFor="phone">Phone:</label>
        <br />
        <input
          type="phone"
          id="phone"
          name="phone"
          className="w-[45%] bg-[#003566] text-[#ffd60a]"
        />{" "}
        <br />
      </div>
      <div className="ml-[42%] lg:ml-[0]">
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          className="w-[45%] bg-[#003566] text-[#ffd60a]"
        ></textarea>{" "}
        <br />
      </div>
      <div className="ml-[42%] lg:ml-[0]">
        <label htmlFor="plan-select">Choose a banana plan: </label>
        <select
          name="plan"
          id="banana-select"
          className=" bg-[#003566] text-[#ffd60a] "
        >
          <option value="">--Please choose an option--</option>
          <option value="basic">BASIC BANANA</option>
          <option value="ripe">RIPE & READY</option>
          <option value="royale">BANANA ROYALE</option>
          <p>See more details in intro page:</p>
        </select>
        <br />
        <br />
      </div>
      <div className="text-[#003566]  ml-[42%] lg:ml-[0]">
        <p className="text-[#003566] text-sm">
          See more detail about option in Intro Page:&nbsp;
          {/* "https://raizy21.github.io/berlin-bananas/ */}
          <a
            target="_blank"
            className="text-[#003566] text-xl hover:text-2xl underline"
            href="https://raizy21.github.io/berlin-bananas/"
          >
            Berlin Banana
          </a>
        </p>
      </div>
      <br />
      <div className="">
        <button
          type="submit"
          className="text-[#ffd60a] bg-[#003566]  text-lg hover:text-xl ml-[42%] lg:ml-[0] lg:text-2xl px-12 rounded-xl lg:hover:text-3xl"
        >
          Send
        </button>
      </div>
      <div className="mt-2">
        <Link to="/home" className="text-primary hover:underline">
          <button
            type="submit"
            className="text-[#ffd60a] bg-[#003566]  text-lg hover:text-xl ml-[42%] lg:ml-[0] lg:text-2xl px-12 rounded-xl lg:hover:text-3xl"
          >
            Go Home
          </button>
        </Link>
      </div>
      {/* end of left side */}
    </form>
  );
};

export default LeftSide;
