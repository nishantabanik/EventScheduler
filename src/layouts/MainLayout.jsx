import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#FFD60A] text-gray-300 flex flex-col min-h-screen">
      <Header />
      <Footer />
    </div>
  );
};

export default MainLayout;
