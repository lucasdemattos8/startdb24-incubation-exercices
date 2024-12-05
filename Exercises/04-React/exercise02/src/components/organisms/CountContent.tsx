import { useState } from "react";
import DecreaseCountButton from "../atoms/Counter/DecreaseCountButton";
import InputButtonOrganism from "../molecules/Input_Button-container";

function CountContent() {
  const [count, setCount] = useState(0);

  function handleInputChange(input: string) {
    const countNumber = parseInt(input);

    if (Number.isNaN(countNumber)) {
      alert("Insira um valor numérico válido!");
    } else if (countNumber === count) {
      alert("Insira um outro valor numérico!");
    } else {
      setCount(countNumber);
    }
  }

  function handleDecreaseButtonClick() {
    setCount(count - 1);
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="font-semibold text-5xl mb-8">Contagem atual</h1>
      <h1 className="font-semibold text-5xl mb-16">{count}</h1>
      <div className="grid grid-cols-input_button_grid">
        <InputButtonOrganism setInputCount={handleInputChange} />
      </div>
      <DecreaseCountButton decreaseCount={handleDecreaseButtonClick} />
    </div>
  );
}

export default CountContent;
