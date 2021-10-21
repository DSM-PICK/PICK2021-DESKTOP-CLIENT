import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { COLOR } from "../../../../style/index";

interface Props {
  fullDate: string;
  dayType: string;
  floor2: string;
  floor3: string;
  floor4: string;
  Today: string;
  month: number;
  year: number;
}

const Day: FC<Props> = ({
  fullDate,
  dayType,
  floor2,
  floor3,
  floor4,
  Today,
}) => {
  const [date, setDate] = useState<string | number>("");
  const [type, setType] = useState<string>();

  useEffect(() => {
    getDate();
    getType();
  }, []);

  const getDate = () => {
    const newDate = (fullDate.split("-")[2] || "").split("");
    setDate(
      fullDate != "" ? parseInt(newDate[0]) * 10 + parseInt(newDate[1]) : ""
    );
  };

  const getType = () => {
    switch (dayType) {
      case "AFTER_SCHOOL":
        setType("자습");
        break;
    } 
  };

  return (
    <S.Days>
      <S.DayTypeContainer>
        <S.Date
          backgroundColor={
            Today === fullDate ? `${COLOR.orange}` : `${COLOR.white}`
          }
          color={Today === fullDate ? `${COLOR.white}` : `${COLOR.black}`}
        >
          {date}
        </S.Date>
        <S.DayType color={Today === fullDate ? `${COLOR.orange}`: `${COLOR.black}`}>{type}</S.DayType>
      </S.DayTypeContainer>
      <S.InputContainer>
        <S.TeacherInput type="text" defaultValue={floor2} />
        <S.TeacherInput type="text" defaultValue={floor3} />
        <S.TeacherInput type="text" defaultValue={floor4} />
      </S.InputContainer>
    </S.Days>
  );
};

export default Day;
