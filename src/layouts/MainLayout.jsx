import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#FFD60A] text-gray-300 flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <main className=" py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
