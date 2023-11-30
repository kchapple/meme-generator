interface LabelProps {
  text: string;
  htmlFor: string;
}

export const Label: React.FC<LabelProps> = (props: LabelProps) => {
  return (
    <label
      className="text-gray-700 text-sm font-bold mb-2"
      htmlFor={props.htmlFor}
    >
      {props.text}
    </label>
  );
};
