import styled from "@emotion/styled";
import { COLOR } from '../../../../style/index';

export const ACTitle = styled.div`
  font-size: 16px;
  width: 70px;
  margin-right: 50px;
  display: flex;
  align-self: center;
`;

export const AbsentsContainer = styled.div`
  display: flex;
  height: 30px;
  gap: 10px;
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
  width: 50px;
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

`;