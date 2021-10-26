import styled from "@emotion/styled";

export const Container = styled.div`
  width: 270px;
  height: 350px;
`;

export const Date = styled.div`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export const CalendarHeader = styled.div`
  height: 33px;
  width: 100%;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Prev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 28px;
    height: 28px;
  }
`;

export const Next = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 28px;
    height: 28px;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const WeekContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 28px;
`;

export const DayContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 28px;
`;

export const WeekDays = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
`;

export const Days = styled.div`
  height: 28px;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &:nth-child(7n + 1) {
    display: none;
  }
  &:nth-child(7n) {
    display: none;
  }
`;
