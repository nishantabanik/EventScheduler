import logo from "../images/banana.png";

const Header = () => {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <header className="flex bg-[#000814] w-full h-[7rem]">
      <a className="w-22 md:w-38 hover:scale-105 transition-all ">
        <img
          src={logo}
          alt="Logo"
          className="bg-[#ffd60a]  h-[7rem] ml-[7rem]"
        />
      </a>

      <div className=" w-full flex justify-end items-center mr-10">
        <button
          className="bg-[#ffd60a] text-[#000814] text-2xl px-12 rounded-xl hover:text-3xl"
          onClick={handleClick}
        >
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
