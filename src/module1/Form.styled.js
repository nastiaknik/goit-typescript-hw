import { styled } from "styled-components";

export const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  min-height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #ffffff;
`;

export const StyledForm = styled.form`
  background-color: #1b1b32;
  color: #ffffff;
  width: 350px;
  height: 300px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px #1b1b32;
`;

export const Label = styled.label`
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-size: 18px;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #1b1b32;
  border-radius: 3px;
  background-color: #313146;
  color: #ffffff;
`;

export const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ResultParagraph = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;
