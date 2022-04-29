import MisdemeanourHeading from "./misdemeanour_heading";
import MisdemeanourRows from "./misdemeanour_row";
import "./misdemeanours.css";
import Filter from "../filter/filter";

const Misdemeanours: React.FC = () => {
  return (
    <>
      <h1 className="pageHeading">Misdemeanours</h1>
      <Filter />
      <table className="table">
        <MisdemeanourHeading />
        <MisdemeanourRows />
      </table>
    </>
  );
};

export default Misdemeanours;
