import * as S from "./styles";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { Prev, Next } from "../../../assets";
import Day from "./Day/Day";
import { data } from "../../../test/testData";

const Calendar: FC = (): JSX.Element => {
  const date: Date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [TData, setTData] = useState(data);
  const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];
  const Today: string = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;

  const dummyData = {
    date: "",
    name: "",
    period: "",
    director: [
      { name: "", teacher_id: "", floor: "" },
      { name: "", teacher_id: "", floor: "" },
    ],
  };

  const addDummyData = (year: number, month: number) => {
    const dateLength: number = new Date(year, month + 1, 0).getDate();
    const newDate: number = new Date(year, month).getDay();
    let DummyFirst = [];
    let DummySecond = [];
    let newDateArray: any = [];

    for (let i = 0; i < newDate - 1; i++) {
      DummyFirst.push(dummyData);
    }

    for (let j = 0; j < dateLength - (newDate - 1 + TData.length); j++) {
      DummySecond.push(dummyData);
    }

    newDateArray = [...DummyFirst, ...TData, ...DummySecond];

    setTData(newDateArray);
  };

  useEffect(() => {
    addDummyData(year, month);
  }, []);


  const nextMonth = () => {
    setMonth(month + 1);
    if (month >= 11) {
      setMonth(0);
      setYear(year + 1);
    }
  };

  const todayDate = () => {
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  };

  const prevMonth = () => {
    setMonth(month - 1);
    if (month < 1) {
      setMonth(11);
      setYear(year - 1);
    }
  };

  return (
    <S.Container>
      <S.CalendarHeader>
        <S.Prev onClick={prevMonth}>
          <img src={Prev} />
        </S.Prev>
        <S.Date onClick={todayDate}>
          {year}년 {month + 1}월
        </S.Date>
        <S.Next onClick={nextMonth}>
          <img src={Next} />
        </S.Next>
      </S.CalendarHeader>
      <S.CalendarContainer>
        <S.WeekContainer>
          {week.map((week: any, index: number) => {
            return <S.WeekDays key={index}>{week}</S.WeekDays>;
          })}
        </S.WeekContainer>
        <S.DayContainer>
          {TData.map((value: any, index: number) => {
            console.log(value.date)
            return (
              <Day
                key={index}
                fullDate={value.date}
                dayType={value.name}
                floor2={value.director[0].name}
                floor3={value.director[1].name}
                floor4={value.director[1].name}
              />
            );
          })}
        </S.DayContainer>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default Calendar;
