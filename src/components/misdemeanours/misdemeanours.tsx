import MisdemeanourHeading from "./misdemeanour_heading";
import MisdemeanourRows from "./misdemeanour_row";
import "./misdemeanours.css";

const Misdemeanours: React.FC = () => {
  return (
    <>
      <h1>Misdemeanours</h1>
      <table className="table">
        <MisdemeanourHeading />
        <MisdemeanourRows />
      </table>
    </>
  );
};

export default Misdemeanours;
