import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const ActionBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
`;

export const RequestState = styled.p`
  margin-top: 10px;
  font-size: 18px;
`;

export const Progress = styled.div`
  display: flex;
  margin: 20px auto;
  text-align: center;
  justify-content: center;
  overflow: hidden;
`;

export const Circle = styled.div`
  display: inline-block;
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #d5d5da;
`;

export const Label = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 32px;
  margin-top: 3px;
  color: #b5b5ba;
  font-size: 17px;

  ${Circle}.done & {
    color: #fff;
    background: #8bc435;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
  }
  ${Circle}.active & {
    color: #fff;
    background: #0c95be;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.span`
  color: #b5b5ba;
  font-size: 13px;
  line-height: 30px;
  margin-left: -5px;

  ${Circle}.done & {
    color: #444;
  }
  ${Circle}.active & {
    color: #0c95be;
  }
`;

export const Bar = styled.span`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 6px;
  top: -33px;
  margin-left: -5px;
  margin-right: -5px;
  border-left: none;
  border-right: none;
  border-radius: 0;
  z-index: -1;
  background: #fff;
  border: 1px solid #d5d5da;
  border-radius: 40px;

  &.done {
    background: #eee;
  }
  &.active {
    background: linear-gradient(to right, #eee 40%, #fff 60%);
  }
`;
