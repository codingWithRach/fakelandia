import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
