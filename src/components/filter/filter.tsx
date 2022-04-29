import { useState } from "react";
import { misdemeanourText } from "../../data/misdemeanours";
import Label from "../footer/label/label";
import Select from "../select/select";
import "./filter.css";

const Filter: React.FC = () => {
  const [filterOption, setFilterOption] = useState<string>("all");
  return (
    <div className="filter">
      <Label forID="filter" labelText="Filter by misdemeanour" />
      <Select
        id="filter"
        values={misdemeanourText}
        onChangeHandler={(event) => setFilterOption(event.target.value)}
      />
    </div>
  );
};

export default Filter;
