import React from "react";
import {
  IConfessionContext,
  useConfession,
  useConfessionUpdate,
} from "../../context/ConfessionContext";
import Label from "../footer/label/label";
import TextInput from "../form_elements/text_input/text_input";

const Subject: React.FC = () => {
  const confession = useConfession();
  const updateConfession = useConfessionUpdate();

  const updateSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newConfession: IConfessionContext = {
      ...confession,
      subject: event.target.value,
    };
    updateConfession(newConfession);
  };

  return (
    <div className="confessionForm__element">
      <Label forID="subject" labelText="Subject" />
      <TextInput
        id="subject"
        value={confession.subject}
        onChangeHandler={updateSubject}
      />
    </div>
  );
};

export default Subject;
