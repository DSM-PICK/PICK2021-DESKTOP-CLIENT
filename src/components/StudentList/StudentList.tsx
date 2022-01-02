import React from "react";
import { useState } from "react";
import * as S from "./styles";

const timeArray = ["학생", "8교시", "9교시", "10교시"];
const arr = new Array(20).fill(0);
const time = new Array(3).fill(0);
const StudentList = () => {
  const [checkbox, setCheckbox] = useState<boolean[]>(
    new Array(20).fill(false)
  );

  const [isAll, setIsAll] = useState(false);
  const changeBox = (index: number) => {
    let newArray = checkbox;
    newArray[index] = !newArray[index];
    setCheckbox(newArray);
    console.log(newArray);
  };
  return (
    <S.Container>
      <S.StudentListTitle>
        <S.CheckBox
          onClick={() => {
            setIsAll(!isAll);
          }}
          display={isAll ? "block" : "none"}
        >
          <div id={"every"} />
        </S.CheckBox>
        {timeArray.map((title, index) => (
          <S.Title key={index}>{title}</S.Title>
        ))}
      </S.StudentListTitle>
      {arr.map((stduent, index) => (
        <S.StudentList key={index}>
          <S.CheckBox
            onClick={() => changeBox(index)}
            display={checkbox[index] ? "block" : "none"}
          >
            <div id={String(index)}></div>
          </S.CheckBox>
          <span>2216 이진우</span>

          {time.map((array, i) => (
            <S.StudentSelect
              key={String(index) + String(i)}
              id={String(index) + String(i) + "id"}
            >
              <option></option>
              <option>이동</option>
              <option>외출</option>
              <option>무단</option>
              <option>현체</option>
              <option>귀가</option>
              <option>취업</option>
            </S.StudentSelect>
          ))}
        </S.StudentList>
      ))}
    </S.Container>
  );
};

export default StudentList;
