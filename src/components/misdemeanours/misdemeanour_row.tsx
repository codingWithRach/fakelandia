import { useMisdemeanours } from "../../context/MisdemeanoursContext";
import { misdemeanourText } from "../../data/misdemeanours";
import { MisdemeanourEntry } from "../../data/misdemeanour_entry";

const MisdemeanourRow: React.FC = () => {
  const misdemeanours: Array<MisdemeanourEntry> = useMisdemeanours();
  return (
    <>
      {misdemeanours.map((misdemeanourEntry, index) => {
        return (
          <tr key={index} className="table__row">
            <td className="table__cell">{misdemeanourEntry.citizenId}</td>
            <td className="table__cell">{misdemeanourEntry.date}</td>
            <td className="table__cell">
              {misdemeanourText[misdemeanourEntry.misdemeanour]}
            </td>
            <td className="table__cell"></td>
          </tr>
        );
      })}
    </>
  );
};

export default MisdemeanourRow;
