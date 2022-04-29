import React, { useContext, useState } from "react";

const defaultDisabled = true;
const DisabledContext = React.createContext<boolean>(defaultDisabled);
const defaultFunction = (disabled: boolean) => {};
const DisabledUpdateContext =
  React.createContext<(disabled: boolean) => void>(defaultFunction);

export function useDisabled(): boolean {
  return useContext(DisabledContext);
}

export function useDisabledUpdate(): typeof defaultFunction {
  return useContext(DisabledUpdateContext);
}

type Props = {
  children?: React.ReactNode;
};
const DisabledProvider: React.FC<Props> = ({ children }) => {
  const [disabled, setDisabled] = useState<boolean>(defaultDisabled);

  function updateDisabled(disabled: boolean) {
    setDisabled(disabled);
  }

  return (
    <DisabledContext.Provider value={disabled}>
      <DisabledUpdateContext.Provider value={updateDisabled}>
        {children}
      </DisabledUpdateContext.Provider>
    </DisabledContext.Provider>
  );
};

export default DisabledProvider;
