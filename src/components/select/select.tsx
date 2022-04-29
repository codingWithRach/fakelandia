import "./select.css";
interface SelectProps {
  id: string;
  values: Object;
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ({ id, values, onChangeHandler }) => {
  return (
    <>
      <select className="select" id={id} onChange={onChangeHandler}>
        {Object.entries(values).map(([option, value]) => (
          <option key={option} value={option}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
