import { useState, useEffect } from "react";
import { imgArray } from "../../data/imgEvents";

const RightSide = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, []);

  return (
    <>
      {/* Right side */}
      <div className="hidden lg:flex border-accent  ">
        <img
          id="imageContact"
          src={imgArray[currentImageIndex].images}
          alt="Event"
          className="rounded-full h-[25rem]"
        />
      </div>
    </>
  );
};

export default RightSide;
