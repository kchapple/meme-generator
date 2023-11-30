import { useEffect, useRef, useState } from "react";
import { ChangeHandlerFunction, ValidationFunction } from "../models/meme";
import { Label } from "./Label";

interface TextInputProps {
  testid: string;
  id: string;
  value: string | number;
  placeholder: string;
  label: string;
  validate: ValidationFunction;
  change: ChangeHandlerFunction;
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  const [localValue, setLocalValue] = useState(props.value);
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Access the current property to get the actual DOM element
    const containerElement = inputRef.current;

    // Add or remove the 'special' class based on the isSpecial prop
    if (containerElement) {
      if (isValid) {
        containerElement.classList.remove("border-red-500");
      } else {
        containerElement.classList.add("border-red-500");
      }
    }
  }, [isValid]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    if (props.validate(newValue)) {
      props.change(newValue);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <Label text={props.label} htmlFor={props.id} />
      <input
        data-testid={props.testid}
        ref={inputRef}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        value={localValue}
        onChange={handleInputChange}
      />
    </>
  );
};

export default TextInput;
