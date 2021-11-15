import styled from "@emotion/styled";

export const Container = styled.div`
  /* height: 100vh; */
  padding-top: 5%;
`;

export const ACContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 24px;
  display: inline-block;
`;

export const ACBox = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: 40% 60%;
`;

export const ChooseBox = styled.div`
  width: 100%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const dateText = styled.div`
  font-size: 18px;
`;

export const ChooseDate = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  cursor: pointer;
`;

export const Date = styled.div`

`;

export const DateIcon = styled.img<{}>`
  transform: rotate(180deg);
`;

export const AttendancyList = styled.div``;

export const Options = styled.div`
  
`;