import { useState, ChangeEvent } from "react";
import {
  Wrapper,
  StyledForm,
  Label,
  Input,
  Button,
  ResultParagraph,
} from "./Form.styled";

export const Form = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  function add(num1: number, num2: number): void {
    if (isNaN(num1) || isNaN(num2)) {
      setResult("Please enter valid numbers!");
    } else {
      setResult(`${num1} + ${num2} = ${num1 + num2}`);
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const newValue = parseFloat(value);
    if (name === "number1") {
      setNumber1(newValue);
    } else if (name === "number2") {
      setNumber2(newValue);
    }
  };

  return (
    <Wrapper>
      <StyledForm autoComplete="off">
        <Label>
          Number 1
          <Input
            type="number"
            name="number1"
            value={number1}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Number 2
          <Input
            type="number"
            value={number2}
            name="number2"
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="button" onClick={() => add(number1, number2)}>
          Add
        </Button>
        <ResultParagraph>{result}</ResultParagraph>
      </StyledForm>
    </Wrapper>
  );
};
