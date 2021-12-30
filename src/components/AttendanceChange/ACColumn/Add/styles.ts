import styled from "@emotion/styled";
import { COLOR } from "../../../../style/index";

export const ACTitle = styled.div`
  font-size: 16px;
  width: 70px;
  margin-right: 50px;
  display: flex;
  align-self: center;
`;

export const AbsentsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 900px;
  position: relative;
`;

export const SearchStudentsInput = styled.input<{ display: string }>`
  width: 84px;
  height: 24px;
  text-align: center;
  outline: none;
  border: 1px solid ${COLOR.gray};
  border-radius: 5px;
  display: ${(props) => props.display};
`;

export const AddAbsents = styled.div`
  cursor: pointer;
  min-width: 50px;
  height: 24px;
  padding: 1px 2px;
  border: 1px solid ${COLOR.gray};
  color: 1px solid ${COLOR.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const SelectedStudents = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchedStudent = styled.div`
  height: 20px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SearchedContainer = styled.div<{ display : string }>`
  max-height: 80px;
  position: absolute;
  display: ${props => props.display};
  flex-direction: column;
  transform: translate(75%, 110%);
  left: 0;
  bottom: 0;
  background: ${COLOR.white};
  overflow: auto;
  border: 1px solid ${COLOR.gray};
  border-radius: 3px;
`;
