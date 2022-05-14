import React, { useContext, useState } from "react";

const defaultFilterOption = "all";
const FilterOptionContext = React.createContext<string>(defaultFilterOption);
const defaultFunction = (filterOption: string) => {};
const FilterOptionUpdateContext =
  React.createContext<(filterOption: string) => void>(defaultFunction);

export function useFilterOption(): string {
  return useContext(FilterOptionContext);
}

export function useFilterOptionUpdate(): typeof defaultFunction {
  return useContext(FilterOptionUpdateContext);
}

type Props = {
  children?: React.ReactNode;
};
const FilterProvider: React.FC<Props> = ({ children }) => {
  const [filterOption, setFilterOption] = useState<string>(defaultFilterOption);

  function updateFilterOption(newFilterOption: string) {
    setFilterOption(newFilterOption);
  }

  return (
    <FilterOptionContext.Provider value={filterOption}>
      <FilterOptionUpdateContext.Provider value={updateFilterOption}>
        {children}
      </FilterOptionUpdateContext.Provider>
    </FilterOptionContext.Provider>
  );
};

export default FilterProvider;
