import logo from "../../images/banana.png"; //import logo
const Logo = () => {
  return (
    <a className="w-22 md:w-38 ">
      <img
        src={logo}
        alt="Logo"
        className="bg-[#ffd60a] h-[6rem] m-[auto]  xl:h-[7rem] xl:ml-[7rem] border-2 border-[#000814] "
      />
    </a>
  );
};

export default Logo;
