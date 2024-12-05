import { useState } from "react";
import Button from "../atoms/Counter/SubmitButton";
import Input from "../atoms/Counter/Input";

interface InputButtonOrganismProp {
  setInputCount: (input: string) => void;
}

function InputButtonOrganism({ setInputCount }: InputButtonOrganismProp) {
  const [count, setCount] = useState("");

  const handleClick = () => {
    setInputCount(count);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <Input onKeyDown={handleInputKeyDown} onChange={setCount} />
      <Button onClick={handleClick} />
    </>
  );
}

export default InputButtonOrganism;
