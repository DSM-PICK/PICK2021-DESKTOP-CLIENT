import React, { FC, useEffect } from "react";
import * as S from "./styles";
import { Add, Date, Type, Reason } from "./ACColumn";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { ReasonAtom, AttendanceChanges, StudentObject } from "../../state/atom/ATChange";
import { getAttendanceChangeList, postAttendanceChange } from "../../utils/api/AttendanceChange";
import { typeArray } from "../../constance";
import List from "./List";
import { postDataType, StudentObjectType } from "../../interface/ATChange";

//출결 변경
const AttendanceChange: FC = (): JSX.Element => {
  const ACListArray: string[] = ["결석일", "결석자", "종류", "신고자", "비고"];
  const ReasonState = useRecoilValue(ReasonAtom);
  const setAttendancyChange = useSetRecoilState(AttendanceChanges);
  const studentObject = useRecoilValue(StudentObject);

  const TestArray = [];

  for (let i = 0; i < 20; i++) {
    TestArray.push(i);
  }

  useEffect(() => {
    getAttendanceChangeList().then((res) => {
      setAttendancyChange(res.data);
    })
  }, []);

  const postChanges = () => {
    let data : postDataType[] = [];
    studentObject.map((value : StudentObjectType) => {
      data.push({
        state: typeArray[value.type],
        term: `${value.sdate}-${value.sclass}T${value.fdate}-${value.fclass}`,
        student_id: value.id,
        reason: value.reason
      })
    })

    data.map((value : postDataType) => {
      postAttendanceChange(value).then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    })
  }

  return (
    <S.Wrapper>
      <S.ACContainer>
        <div className="acbox">
          <>
            <S.Title>출결 변경</S.Title>
            <Add />
          </>
          <Date />
          <Type />
          <Reason />
          <S.AddButton type="button" value="추가하기" onClick={postChanges}/>
          <S.ErrorMessage display={ReasonState.length > 10 ? "block" : "none"}>
            비고의 내용이 10글자를 넘었습니다
          </S.ErrorMessage>
        </div>
        <div className="aclistbox">
          <S.Title>출결 변동사항</S.Title>
          <S.ACListContainer>
            <S.ACListHeader>
              {ACListArray.map((value: string, index: number) => {
                return <S.ACListHead key={index}>{value}</S.ACListHead>;
              })}
            </S.ACListHeader>
            <S.ACListBody>
              {TestArray.map((value: number, index: number) => {
                return (
                  <List
                    index={index}
                    key={value}
                    date={"2020.9.31 2교시 ~ 2020.9.31 3교시"}
                    name={"조준서"}
                    teacherName={"신요신"}
                    reason={"학교 밖으로 나갔어요"}
                    type={"외출"}
                  />
                );
              })}
            </S.ACListBody>
          </S.ACListContainer>
        </div>
      </S.ACContainer>
    </S.Wrapper>
  );
};

export default AttendanceChange;
