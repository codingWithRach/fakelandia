import React, { useContext, useEffect, useState } from "react";
import generateMisdemeanours from "../data/generate_misdemeanours";
import { MisdemeanourEntry } from "../data/misdemeanour_entry";

const MisdemeanoursContext = React.createContext<Array<MisdemeanourEntry>>([]);
const defaultFunction = (misdemeanourEntry: MisdemeanourEntry) => {};
const MisdemeanoursUpdateContext =
  React.createContext<(misdemeanourEntry: MisdemeanourEntry) => void>(
    defaultFunction
  );

export function useMisdemeanours(): Array<MisdemeanourEntry> {
  return useContext(MisdemeanoursContext);
}

export function useMisdemeanoursUpdate(): typeof defaultFunction {
  return useContext(MisdemeanoursUpdateContext);
}

type Props = {
  children?: React.ReactNode;
};
const MisdemeanoursProvider: React.FC<Props> = ({ children }) => {
  const [misdemeanours, setMisdemeanours] = useState<Array<MisdemeanourEntry>>(
    []
  );

  useEffect(() => {
    async function getMisdemeanours() {
      const response = await generateMisdemeanours(5);
      setMisdemeanours(response);
    }
    getMisdemeanours();
  }, []);

  function updateMisdemeanours(newMisdemeanourEntry: MisdemeanourEntry) {
    setMisdemeanours([...misdemeanours, newMisdemeanourEntry]);
  }

  return (
    <MisdemeanoursContext.Provider value={misdemeanours}>
      <MisdemeanoursUpdateContext.Provider value={updateMisdemeanours}>
        {children}
      </MisdemeanoursUpdateContext.Provider>
    </MisdemeanoursContext.Provider>
  );
};

export default MisdemeanoursProvider;
