import { FC } from "react";
import * as S from "./styles";

interface Props {
    date: string,
    dayType: string,
    floor2: string,
    floor3: string,
    floor4: string
}

const Day: FC<Props> = ({date, dayType, floor2, floor3, floor4}) => {
    return (
        <S.Days>
            <div>{date}</div>
            <div>{dayType}</div>
            <div>{floor2}</div>
            <div>{floor3}</div>
            <div>{floor4}</div>
        </S.Days>
    )
}

export default Day;