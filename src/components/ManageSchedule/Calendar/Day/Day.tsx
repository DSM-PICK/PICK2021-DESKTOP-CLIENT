import { FC, useEffect, useState } from "react";
import * as S from "./styles";

interface Props {
  fullDate: string;
  dayType: string;
  floor2: string;
  floor3: string;
  floor4: string;
}

const Day: FC<Props> = ({ fullDate, dayType, floor2, floor3, floor4 }) => {
  const [date, setData] = useState<string | number>("");
  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    const newDate = (fullDate.split("-")[2] || "").split("");
    setData(fullDate != "" ? parseInt(newDate[0]) * 10 + parseInt(newDate[1]) : "");
  };

  return (
    <S.Days>
      <div>{date}</div>
      <div>{dayType}</div>
      <div>{floor2}</div>
      <div>{floor3}</div>
      <div>{floor4}</div>
    </S.Days>
  );
};

export default Day;



  // const makeCalendar = (year: number, month: number) => {
  //   const dateLength: number = new Date(year, month + 1, 0).getDate();
  //   const newDate: number = new Date(year, month).getDay();

  //   for (let i = newDate; i < dateLength + newDate; i++) {
  //     const div = document.createElement("div");
  //     div.innerHTML = `${i - (newDate - 1)}`;
  //     if (`${year} ${month} ${div.innerHTML}` === Today) {
  //       div.style.backgroundColor = "#FF6E04";
  //       div.style.display = "inline";
  //       div.style.padding = "0 3px";
  //       div.style.borderRadius = "100%";
  //       div.style.color = "white";
  //     }
  //     DayContainer.current.childNodes[i].insertBefore(div, null);
  //   }
  // };