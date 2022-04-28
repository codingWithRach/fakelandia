import MisdemeanourHeading from "../misdemeanour_heading/misdemeanour_heading";
import MisdemeanourRows from "../misdemeanour_row/misdemeanour_row";

const Misdemeanours: React.FC = () => {
  return (
    <>
      <h1>Misdemeanours</h1>
      <table>
        <MisdemeanourHeading />
        <MisdemeanourRows />
      </table>
    </>
  );
};

export default Misdemeanours;
