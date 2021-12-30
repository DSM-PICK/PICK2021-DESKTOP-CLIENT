import styled from "@emotion/styled";
import { COLOR } from "../../style/index";

export const ACColumn = styled.div`
  height: 30px;
  display: grid;
  align-items: center;
  grid-template-columns: 20% 80%;
  margin-left: 30px;
`;

export const Wrapper = styled.div`
  min-width: 1280px;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const ACContainer = styled.div`
  width: 1280px;
  height: 800px;
  display: grid;
  margin-top: 60px;
  grid-template-rows: 40% 60%;

  & .acbox {
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 15px;
    position: relative;
  }

  & .aclistbox {
    padding-top: 60px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 32px;
`;

export const AddButton = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${COLOR.orange};
  color: ${COLOR.white};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 16px;
`;

export const ErrorMessage = styled.div<{ display: string }>`
  position: absolute;
  width: 100%;
  color: red;
  text-align: center;
  bottom: 0;
  transform: translateY(180%);
  font-size: 16px;
  display: ${(props) => props.display};
`;

export const ACListHeader = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 35% 13% 13% 13% 25%;
  border-bottom: 1px solid ${COLOR.lightGray};
  background-color: ${COLOR.lighterGray};
`;

export const ACListBody = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  height: 240px;
  width: 100%;
  overflow: auto;
  font-size: 15px;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const ACListHead = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ACListContainer = styled.div`
  border: 1px solid ${COLOR.lightGray};
  border-radius: 5px;
`;
