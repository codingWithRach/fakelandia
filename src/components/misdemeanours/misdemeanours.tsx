import MisdemeanourHeading from "./misdemeanour_heading";
import MisdemeanourRows from "./misdemeanour_row";
import "./misdemeanours.css";
import Filter from "./filter/filter";
import FilterProvider from "../../context/FilterContext";

const Misdemeanours: React.FC = () => {
  return (
    <>
      <h1 className="pageHeading">Misdemeanours</h1>
      <FilterProvider>
        <Filter />
        <table className="table">
          <tbody>
            <MisdemeanourHeading />
            <MisdemeanourRows />
          </tbody>
        </table>
      </FilterProvider>
    </>
  );
};

export default Misdemeanours;
