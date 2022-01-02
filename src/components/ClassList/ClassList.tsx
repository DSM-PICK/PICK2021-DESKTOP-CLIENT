import React, { useState, useEffect, useLayoutEffect } from "react";
import { getAfterSchool, getMajorClub } from "../../utils/api/Afterschool";
import { getLocationList } from "../../utils/api/Locationlist";
import * as S from "./styles";
const floorArr = ["4층", "3층", "2층", "기타"];
const ClassList = () => {
  const [afterschool, setAfterschool] = useState<number>(1);
  const [floor, setFloor] = useState<number>(0);

  useEffect(() => {
    setFloor(0);
    if (afterschool === 1) {
      getAfterSchool().then((res) => console.log(res));
    } else if (afterschool === 2) {
      getMajorClub().then((res) => console.log(res));
    }
  }, [afterschool]);
  useEffect(() => {}, [floor]);

  useLayoutEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return;
    }
    getLocationList(token).then((res) => console.log(res.data));
  }, []);

  const changeFloor = (index: number) => {
    setFloor(index);
  };
  return (
    <S.BtnContainer>
      <S.ClubState>
        <S.ClassName>GRAM</S.ClassName>
        <span>담당교사:신요신</span>
        <span>총 학생:19명</span>
      </S.ClubState>
      <S.ClubLocationWrapper>
        <S.Location>
          <span style={{ color: "black", cursor: "default" }}>층</span>
          {floorArr.map((floorname, i) => (
            <S.FloorName
              key={i}
              onClick={() => changeFloor(i)}
              select={floor === i}
            >
              {floorname}
            </S.FloorName>
          ))}
        </S.Location>
      </S.ClubLocationWrapper>
      <S.BtnWrapper>
        <S.BtnItem onClick={() => setAfterschool(1)} select={afterschool === 1}>
          방과후
        </S.BtnItem>
        <S.BtnItem onClick={() => setAfterschool(2)} select={afterschool === 2}>
          전공
        </S.BtnItem>
        <S.BtnItem onClick={() => setAfterschool(3)} select={afterschool === 3}>
          자습
        </S.BtnItem>
      </S.BtnWrapper>
    </S.BtnContainer>
  );
};

export default ClassList;
