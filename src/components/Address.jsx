import Berlin from "./Berlin"; //import Berlin
import Hannover from "./Hannover"; //import Hannover

const Address = () => {
  return (
    <div className=" flex flex-row justify-evenly xl:justify-center ">
      <Berlin />
      <Hannover />
    </div>
  );
};

export default Address;
