import { useRef, useState } from "react";
import { Input, Result, Select, SelectControlled } from "./components";

const selectOptions = [
  { value: "mm", label: "mm" },
  { value: "cm", label: "cm" },
  { value: "m", label: "m" },
];

export const Converter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState();
  const selectFromRef = useRef();
  const [selectTo, setSelectTo] = useState();

  const handleConvert = () => {
    if (!inputValue || !selectFromRef.current.value || !selectTo) {
      return;
    }

    let unifiedValue;
    switch (selectFromRef.current.value) {
      case "mm":
        unifiedValue = inputValue / 10;
        break;
      case "m":
        unifiedValue = inputValue * 100;
        break;
      default:
      case "cm":
        unifiedValue = inputValue;
        break;
    }

    let convertResult;
    switch (selectTo) {
      case "mm":
        convertResult = unifiedValue * 10;
        break;
      case "m":
        convertResult = unifiedValue / 100;
        break;
      default:
      case "cm":
        convertResult = unifiedValue;
        break;
    }

    setResult(Number(Number(convertResult).toFixed(String(inputValue).length)));
  };

  return (
    <>
      <div>
        <Input value={inputValue} onChange={setInputValue} />
        <Select ref={selectFromRef} options={selectOptions} />
        {` ${"в"} `}
        <SelectControlled
          value={selectTo}
          onChange={setSelectTo}
          options={selectOptions}
        />
      </div>
      <div>
        <Result value={result} />
      </div>
      <button onClick={handleConvert}>Convert</button>
    </>
  );
};
