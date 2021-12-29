import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "../../styles";
import { COLOR } from "../../../../style";
import { useRecoilState } from "recoil";
import {
  FModal,
  SModal,
  FDateValue,
  SDateValue,
} from "../../../../state/atom/ATChange";
import Calendar from "../../../Calendar/Calendar";

const DatePick: FC = (): JSX.Element => {
  const date = new Date();
  const ACListArray: string[] = ["결석일", "결석자", "종류", "신고자", "비고"];
  const TypesArray: string[] = ["외출", "현체", "귀가", "이동", "취업"];
  const TypesRefs = useRef(new Array(TypesArray.length));
  const [isFOpen, setIsFOpen] = useRecoilState<boolean>(FModal);
  const [isSOpen, setIsSOpen] = useRecoilState<boolean>(SModal);
  const [fdateValue, setFdateValue] = useRecoilState<string>(FDateValue);
  const [sdateValue, setSdateValue] = useRecoilState<string>(SDateValue);
  const [typeIndex, setTypeIndex] = useState<number>(0);

  useEffect(() => {
    setFdateValue(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setSdateValue(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
  }, []);

  return (
    <S.ACColumn>
      <S.ACTitle>날짜</S.ACTitle>
      <S.DateBox>
        <S.Date>
          <S.DateText onClick={() => setIsFOpen(!isFOpen)}>
            {`${fdateValue.split("-")[0]}년 ${fdateValue.split("-")[1]}월 ${
              fdateValue.split("-")[2]
            }일`}
          </S.DateText>
          <Calendar isOpen={isFOpen} index={0} />
          <div className="classContainer">
            <S.ClassInput maxLength={1} />
            <div>교시</div>
          </div>
        </S.Date>
        <span>~</span>
        {/* 두번째 날짜 */}
        <S.Date>
          <S.DateText onClick={() => setIsSOpen(!isSOpen)}>
            {`${sdateValue.split("-")[0]}년 ${sdateValue.split("-")[1]}월 ${
              sdateValue.split("-")[2]
            }일`}
          </S.DateText>
          <Calendar isOpen={isSOpen} index={1} />
          <div className="classContainer">
            <S.ClassInput maxLength={1} />
            <div>교시</div>
          </div>
        </S.Date>
      </S.DateBox>
    </S.ACColumn>
  );
};

export default DatePick;
