import { useFilterOption } from "../../context/FilterContext";
import { useMisdemeanours } from "../../context/MisdemeanoursContext";
import { misdemeanourText } from "../../data/misdemeanours";
import { MisdemeanourEntry } from "../../data/misdemeanour_entry";

const MisdemeanourRow: React.FC = () => {
  const misdemeanours: Array<MisdemeanourEntry> = useMisdemeanours();
  const filterOption: string = useFilterOption();

  let misdemeanoursToDisplay = [...misdemeanours];
  if (filterOption !== "all") {
    misdemeanoursToDisplay = misdemeanours.filter(
      (misdemeanourEntry) => misdemeanourEntry.misdemeanour === filterOption
    );
  }
  misdemeanoursToDisplay.sort((a, b) => a.citizenId - b.citizenId);

  return (
    <>
      {misdemeanoursToDisplay.map((misdemeanourEntry, index) => {
        let rowClass = "table__row";
        if (misdemeanourEntry.selfConfessed) {
          rowClass += " table__row--selfconfessed";
        }
        return (
          <tr key={index} className={rowClass}>
            <td className="table__cell">{misdemeanourEntry.citizenId}</td>
            <td className="table__cell">{misdemeanourEntry.date}</td>
            <td className="table__cell">
              {misdemeanourText[misdemeanourEntry.misdemeanour]}
            </td>
            <td className="table__cell">{misdemeanourEntry.description}</td>
            <td className="table__cell">
              <img
                className="table__image"
                alt={`Punishment for ${misdemeanourEntry.misdemeanour}`}
                src={`https://picsum.photos/130/65?random=${misdemeanourEntry.citizenId}`}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default MisdemeanourRow;
