import { useMisdemeanours } from "../../context/MisdemeanoursContext";
import { misdemeanourText } from "../../data/misdemeanours";
import { MisdemeanourEntry } from "../../data/misdemeanour_entry";

const MisdemeanourRow: React.FC = () => {
  const misdemeanours: Array<MisdemeanourEntry> = useMisdemeanours();
  return (
    <>
      {misdemeanours.map((misdemeanourEntry, index) => {
        return (
          <tr key={index}>
            <td>{misdemeanourEntry.citizenId}</td>
            <td>{misdemeanourEntry.date}</td>
            <td>{misdemeanourText[misdemeanourEntry.misdemeanour]}</td>
            <td></td>
          </tr>
        );
      })}
    </>
  );
};

export default MisdemeanourRow;
