import React from "react";
import * as S from "./styles";
import PageInfo from "./PageInfo";
const AttendanceChangeList = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>출결 변동사항</S.Title>
        <PageInfo pageName="출석변경" />
      </S.TitleWrapper>
      <S.OutingListWrapper>
        <S.AbsentItem listWidth={"400px"} rightLine>
          <S.Layer>결석일</S.Layer>
          <S.AbsentInfo>9월 13일 1교시 ~ 9월 13일 2교시</S.AbsentInfo>
        </S.AbsentItem>
        <S.AbsentItem listWidth={"300px"} rightLine>
          <S.Layer>결석자</S.Layer>
          <S.AbsentInfo>2216 이진우</S.AbsentInfo>
        </S.AbsentItem>
        <S.AbsentItem listWidth={"200px"} rightLine>
          <S.Layer>종류</S.Layer>
          <S.AbsentInfo>취업</S.AbsentInfo>
        </S.AbsentItem>
        <S.AbsentItem listWidth={"200px"} rightLine>
          <S.Layer>신고자</S.Layer>
          <S.AbsentInfo>PICK</S.AbsentInfo>
        </S.AbsentItem>
        <S.AbsentItem listWidth={"400px"}>
          <S.Layer>비고</S.Layer>
          <S.AbsentInfo>아무것도 없음</S.AbsentInfo>
        </S.AbsentItem>
      </S.OutingListWrapper>
    </S.Container>
  );
};

export default AttendanceChangeList;
