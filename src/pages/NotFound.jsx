import { useNavigate } from "react-router";
import notFoundImage from "../images/not-found-banana.png";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  return (
    <div className="flex flex-col items-center">
      <img className="w-full h-[30rem] object-contain" src={notFoundImage} />

      <button
        className="text-[#000814] bg-[#ffd60a] p-8 rounded-full"
        onClick={handleGoBack}
      >
        Return to banana pages
      </button>
    </div>
  );
};

export default NotFound;
