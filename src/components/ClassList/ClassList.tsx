import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { getLocationList } from "../../utils/api/Locationlist";
import * as S from "./styles";
const floorArr = ["4층", "3층", "2층", "기타"];
const ClassList = () => {
  const [classArr, setClassArr] = useState<any>([]);
  const [afterschool, setAfterschool] = useState<number>(1);
  useLayoutEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return;
    }
    getLocationList(token).then((res) => console.log(res.data));
  }, []);
  const changeFloor = () => {};
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
          <span style={{ color: "black", cursor: "default" }}>층</span>
          {floorArr.map((floor, i) => (
            <span key={i} onClick={changeFloor}>
              {floor}
            </span>
          ))}
        </S.Location>
        <S.Location></S.Location>
      </S.ClubLocationWrapper>
      <S.BtnWrapper>
        <S.BtnItem onClick={() => setAfterschool(1)}>방과후</S.BtnItem>
        <S.BtnItem onClick={() => setAfterschool(2)}>전공</S.BtnItem>
        <S.BtnItem onClick={() => setAfterschool(3)}>자습</S.BtnItem>
      </S.BtnWrapper>
    </S.BtnContainer>
  );
};

export default ClassList;
