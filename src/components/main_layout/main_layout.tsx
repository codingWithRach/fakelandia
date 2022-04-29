import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/footer";
import Header from "../shared/header/header";

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
