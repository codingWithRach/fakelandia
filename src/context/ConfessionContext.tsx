import React, { useContext, useState } from "react";
import { validConfession } from "../components/confession/valid_confession";
import { useDisabledUpdate } from "./DisabledContext";

export interface IConfessionContext {
  subject: string;
  reasonForContact: string;
  confession: string;
}

export const defaultConfession: IConfessionContext = {
  subject: "",
  reasonForContact: "select",
  confession: "",
};
const ConfessionContext =
  React.createContext<IConfessionContext>(defaultConfession);
const defaultFunction = (confession: IConfessionContext) => {};
const ConfessionUpdateContext =
  React.createContext<(confession: IConfessionContext) => void>(
    defaultFunction
  );

export function useConfession(): IConfessionContext {
  return useContext(ConfessionContext);
}

export function useConfessionUpdate(): typeof defaultFunction {
  return useContext(ConfessionUpdateContext);
}

type Props = {
  children?: React.ReactNode;
};
const ConfessionProvider: React.FC<Props> = ({ children }) => {
  const [confession, setConfession] =
    useState<IConfessionContext>(defaultConfession);
  const toggleDisabled = useDisabledUpdate();

  function updateConfession(confession: IConfessionContext) {
    setConfession(confession);
    toggleDisabled(!validConfession(confession));
  }

  return (
    <ConfessionContext.Provider value={confession}>
      <ConfessionUpdateContext.Provider value={updateConfession}>
        {children}
      </ConfessionUpdateContext.Provider>
    </ConfessionContext.Provider>
  );
};

export default ConfessionProvider;
