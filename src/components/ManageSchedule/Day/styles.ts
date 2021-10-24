import styled from "@emotion/styled";
import { COLOR } from "../../../style";

export const Days = styled.div`
  text-align: left;
  border: 1px solid ${COLOR.grey};
`;

export const DayTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

export const Date = styled.div<{ backgroundColor: string; color: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: 28px;
  height: 28px;
  font-size: 18px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DayType = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 14px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  text-align: center;
`;

export const TeacherInput = styled.div`
  text-align: center;
  border: none;
  text-decoration: none;
  outline: none;
  font-size: 18px;
`;
