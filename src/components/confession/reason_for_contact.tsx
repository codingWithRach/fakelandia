import {
  IConfessionContext,
  useConfession,
  useConfessionUpdate,
} from "../../context/ConfessionContext";
import { misdemeanourText } from "../../data/misdemeanours";
import Label from "../shared/form_elements/label/label";
import Select from "../shared/form_elements/select/select";

const ReasonForContact: React.FC = () => {
  const confession = useConfession();
  const updateConfession = useConfessionUpdate();

  const updateReason = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newConfession: IConfessionContext = {
      ...confession,
      reasonForContact: event.target.value,
    };
    updateConfession(newConfession);
  };

  return (
    <div className="confessionForm__element">
      <Label forID="reason" labelText="Reason for Contact" />
      <Select
        id="reason"
        values={{
          select: "Select",
          ...misdemeanourText,
          all: "I just want to talk",
        }}
        onChangeHandler={updateReason}
      />
    </div>
  );
};

export default ReasonForContact;
