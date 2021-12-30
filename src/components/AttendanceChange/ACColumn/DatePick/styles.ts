import styled from "@emotion/styled";
import { COLOR } from "../../../../style";

export const ACTitle = styled.div`
  font-size: 16px;
  width: 70px;
  margin-right: 50px;
  display: flex;
  align-self: center;
`;

export const DateBox = styled.div`
  display: flex;
  width: 100%;

  span {
    margin: 0 10px;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
  width: 175px;

  & .classContainer {
    display: flex;
  }
`;

export const DateText = styled.div`
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  width: auto;
  margin: 0 auto;
  padding: 1px 2px;
  &:hover {
    transition: 0.3s;
    background-color: ${COLOR.lighterGray};
    border-radius: 5px;
  }
`;

export const ClassInput = styled.input`
  width: 15px;
  text-align: center;
  outline: none;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid ${COLOR.black};
`;