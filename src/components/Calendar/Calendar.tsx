import * as S from "./styles";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { Prev, Next } from "../../assets";
import { COLOR } from "../../style/index";

const Calendar: FC = (): JSX.Element => {
  const date: Date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const week: Array<string> = ["월", "화", "수", "목", "금"];
  const Today: string = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  const DayContainer: MutableRefObject<any> = useRef();

  useEffect(() => {
    for (let i = 0; i < 41; i++) {
      if (DayContainer.current.childNodes[i].children.length >= 1) {
        DayContainer.current.childNodes[i].firstChild.remove();
      }
    }
    makeCalendar(year, month);
  }, [month]);

  const makeCalendar = (year: number, month: number) => {
    const dateLength: number = new Date(year, month + 1, 0).getDate();
    const newDate: number = new Date(year, month).getDay();
    for (let i = newDate; i < dateLength + newDate; i++) {
      const div = document.createElement("div");
      div.innerHTML = `${i - (newDate - 1)}`;
      if (`${year}${month + 1}${div.innerHTML}` === Today) {
        div.style.backgroundColor = `${COLOR.orange}`;
        div.style.width = "28px";
        div.style.height = "28px";
        div.style.borderRadius = "100%";
        div.style.color = `${COLOR.white}`;
      }
      DayContainer.current.childNodes[i].insertBefore(div, null);
    }
  };

  const renderDay = () => {
    //달력 칸 42개 렌더링하기
    const dayArray: Array<any> = [];
    for (let i = 1; i <= 42; i++) {
      dayArray.push(<S.Days key={i} />);
    }
    return dayArray;
  };

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
        .<S.DayContainer ref={DayContainer}>{renderDay()}</S.DayContainer>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default Calendar;
