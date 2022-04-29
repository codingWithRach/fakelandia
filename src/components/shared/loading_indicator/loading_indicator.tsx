import { JellyfishSpinner } from "react-spinners-kit";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./loading_indicator.css";

const LoadingIndicator: React.FC = () => {
  return (
    <>
      <Header />
      <div className="indicator">
        <JellyfishSpinner size={100} />
      </div>
      <Footer />
    </>
  );
};

export default LoadingIndicator;
