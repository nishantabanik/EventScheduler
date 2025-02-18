import { useNavigate } from "react-router";
import notFoundImage from "../images/not-found-banana.png";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  return (
    <div className="flex flex-col border border-white h-screen items-center justify-center gap-12">
      <img className="w-full h-[30rem] object-contain" src={notFoundImage} />

      <button
        className="btn btn-outline btn-warning mt-3 text-accent rounded-full"
        onClick={handleGoBack}
      >
        Return to banana pages
      </button>
    </div>
  );
};

export default NotFound;
