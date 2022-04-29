import React, { useContext, useEffect, useState } from "react";
import LoadingIndicator from "../components/shared/loading_indicator/loading_indicator";
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
  const [loading, setLoading] = useState(false);
  const shouldLoad = misdemeanours.length === 0 && !loading;

  useEffect(() => {
    async function getMisdemeanours() {
      if (loading) return;
      console.log("LOADING");
      setLoading(true);
      const response = await generateMisdemeanours(5);
      setMisdemeanours(response);
      setLoading(false);
    }
    if (shouldLoad) {
      getMisdemeanours();
    }
  }, [shouldLoad, loading]);

  function updateMisdemeanours(newMisdemeanourEntry: MisdemeanourEntry) {
    setMisdemeanours([...misdemeanours, newMisdemeanourEntry]);
  }

  return (
    <MisdemeanoursContext.Provider value={misdemeanours}>
      <MisdemeanoursUpdateContext.Provider value={updateMisdemeanours}>
        {loading && <LoadingIndicator />}
        {!loading && children}
      </MisdemeanoursUpdateContext.Provider>
    </MisdemeanoursContext.Provider>
  );
};

export default MisdemeanoursProvider;
