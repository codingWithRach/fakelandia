interface TextAreaProps {
  id: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({ id, value, onChangeHandler }) => {
  return (
    <>
      <textarea
        id={id}
        value={value}
        rows={4}
        cols={54}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default TextArea;
