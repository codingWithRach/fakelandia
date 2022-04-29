import "./label.css";

interface LabelProps {
  forID: string;
  labelText: string;
}

const Label: React.FC<LabelProps> = ({ forID, labelText }) => (
  <label className="form__text label" htmlFor={forID}>
    {labelText}
  </label>
);

export default Label;
