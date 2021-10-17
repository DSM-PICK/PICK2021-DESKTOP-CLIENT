import styled from "@emotion/styled";

export const Days = styled.div`
  text-align: left;
  border-top: 1px solid #8e8e93;
  padding-top: 8px;
  padding-left: 8px;
  border: 1px solid #e5e5e5;
  &:nth-child(7n + 1) {
    display: none;
  }
  &:nth-child(7n) {
    display: none;
  }
`;

export const TeacherInput = styled.input`
  width: 100%;
  text-decoration: none;
  outline: none;
  border: none;
`;

export const InputContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%; */
`;