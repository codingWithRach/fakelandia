import { useFilterOptionUpdate } from "../../context/FilterContext";
import { misdemeanourText } from "../../data/misdemeanours";
import Label from "../footer/label/label";
import Select from "../select/select";
import "./filter.css";

const Filter: React.FC = () => {
  const filterOptionUpdate = useFilterOptionUpdate();
  return (
    <div className="filter">
      <Label forID="filter" labelText="Filter by misdemeanour" />
      <Select
        id="filter"
        values={misdemeanourText}
        onChangeHandler={(event) => filterOptionUpdate(event.target.value)}
      />
    </div>
  );
};

export default Filter;
