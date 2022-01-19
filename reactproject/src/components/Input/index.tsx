import React, { useEffect, useState } from "react";

interface Props {
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: any;
}

const Input = ({ placeholder, type = "text", value, onChange }: Props) => {
  const [valueState, setValueState] = useState(value ?? "");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValueState(e.target.value);
  };

  useEffect(() => {
    onChange(valueState);
  }, [valueState]);

  return (
    <>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        onChange={handleInputChange}
      />
    </>
  );
};

export default Input;
