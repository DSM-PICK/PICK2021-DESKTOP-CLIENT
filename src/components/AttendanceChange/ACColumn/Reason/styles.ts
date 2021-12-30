import styled from "@emotion/styled";
import { COLOR } from "../../../../style/index";

export const ACTitle = styled.div`
  font-size: 16px;
  width: 70px;
  margin-right: 50px;
  display: flex;
  align-self: center;
`;

export const NoteInput = styled.input`
  width: 97%;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${COLOR.darkerGray};
  outline: none;
  text-align: center;
  color: ${COLOR.darkGray};
`;
