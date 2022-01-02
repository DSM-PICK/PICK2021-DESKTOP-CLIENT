import styled from "@emotion/styled";
import { COLOR } from "../../../style";

export const SelectedStudents = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const Selected = styled.div<{ display : string }>`
    width: 4px;
    height: 4px;
    background-color: ${COLOR.orange};
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: ${props => props.display};
`;

export const Delete = styled.div<{display : string}>`
    padding: 2px 4px;
    position: absolute;
    color: ${COLOR.red};
    bottom: 0;
    left: 50%;
    transform: translate(-50% , 80%);
    font-size: 14px;
    display : ${props => props.display};
`;