import styled from "@emotion/styled";
import { COLOR } from "../../../../style/index";

export const ACTitle = styled.div`
  font-size: 16px;
  width: 70px;
  margin-right: 50px;
  display: flex;
  align-self: center;
`;

export const TypeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Types = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid ${COLOR.darkGray};
  border-radius: 6px;
  overflow: hidden;
`;

export const Type = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
