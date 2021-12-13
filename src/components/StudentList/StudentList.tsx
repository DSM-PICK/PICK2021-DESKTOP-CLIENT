import React from "react";
import * as S from "./styles";

const timeArray = ["학생", "8교시", "9교시", "10교시"];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const StudentList = () => {
  return (
    <S.Container>
      <S.StudentListTitle>
        <S.CheckBox />
        {timeArray.map((title, index) => (
          <S.Title key={index}>{title}</S.Title>
        ))}
      </S.StudentListTitle>
      {arr.map((stduent, index) => (
        <S.StudentList>
          <S.CheckBox>
            <div></div>
          </S.CheckBox>
          <span>2216 이진우</span>
          <S.StudentSelect>
            <option selected></option>
            <option>이동</option>
            <option>외출</option>
            <option>무단</option>
            <option>현체</option>
            <option>귀가</option>
          </S.StudentSelect>
          <S.StudentSelect>
            <option selected></option>
            <option>이동</option>
            <option>외출</option>
            <option>무단</option>
            <option>현체</option>
            <option>귀가</option>
          </S.StudentSelect>
          <S.StudentSelect>
            <option selected></option>
            <option>이동</option>
            <option>외출</option>
            <option>무단</option>
            <option>현체</option>
            <option>귀가</option>
          </S.StudentSelect>
        </S.StudentList>
      ))}
    </S.Container>
  );
};

export default StudentList;
