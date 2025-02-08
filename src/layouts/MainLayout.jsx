import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-slate-600 text-gray-300 flex flex-col min-h-screen">
      <Header />
      <Footer />
    </div>
  );
};

export default MainLayout;
