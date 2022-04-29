import { useDisabled } from "../../../../context/DisabledContext";

interface SubmitButtonProps {
  labelText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ labelText }) => {
  const disabled = useDisabled();

  return (
    <>
      <button type="submit" disabled={disabled}>
        {labelText}
      </button>
    </>
  );
};

export default SubmitButton;
