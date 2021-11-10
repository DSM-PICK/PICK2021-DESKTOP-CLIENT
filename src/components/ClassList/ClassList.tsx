import React from "react";
import * as S from "./styles";
const floorArr = ["층", "4층", "3층", "2층", "기타"];
const classArr = [
  "동아리명",
  "교실(3-1)",
  "세미나실(2-1)",
  "교실(3-2)",
  "교실(3-3)",
];
const ClassList = () => {
  return (
    <S.BtnContainer>
      <S.ClubState>
        <S.ClassName>GRAM</S.ClassName>
        <span>담당교사:신요신</span>
        <span>총 학생:19명</span>
        <span>출석 예정:13명</span>
      </S.ClubState>
      <S.ClubLocationWrapper>
        <S.Location>
          {floorArr.map((floor, i) => (
            <span key={i}>{floor}</span>
          ))}
        </S.Location>
        <S.Location>
          {classArr.map((className, i) => (
            <span key={i}>{className}</span>
          ))}
        </S.Location>
      </S.ClubLocationWrapper>
      <S.BtnWrapper>
        <S.BtnItem>방과후</S.BtnItem>
        <S.BtnItem>전공</S.BtnItem>
        <S.BtnItem>자습</S.BtnItem>
      </S.BtnWrapper>
    </S.BtnContainer>
  );
};

export default ClassList;
