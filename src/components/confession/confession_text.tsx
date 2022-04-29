import React from "react";
import {
  IConfessionContext,
  useConfession,
  useConfessionUpdate,
} from "../../context/ConfessionContext";
import TextArea from "../shared/form_elements/textarea";

const ConfessionText: React.FC = () => {
  const confession = useConfession();
  const updateConfession = useConfessionUpdate();

  const updateConfessionText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newConfession: IConfessionContext = {
      ...confession,
      confession: event.target.value,
    };
    updateConfession(newConfession);
  };

  return (
    <div className="confessionForm__element">
      <TextArea
        id="confessionText"
        value={confession.confession}
        onChangeHandler={updateConfessionText}
      />
    </div>
  );
};

export default ConfessionText;
