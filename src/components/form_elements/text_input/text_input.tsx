interface TextInputProps {
  id: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  value,
  onChangeHandler,
}) => {
  return (
    <>
      <input type="text" id={id} value={value} onChange={onChangeHandler} />
    </>
  );
};

export default TextInput;
