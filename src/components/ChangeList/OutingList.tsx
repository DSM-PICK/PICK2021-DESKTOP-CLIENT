import React, { FC } from "react";
import * as S from "./styles";
import PageInfo from "./PageInfo";

const OutingList: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>외출 현황</S.Title>
        <PageInfo pageName="출석체크" />
      </S.TitleWrapper>
      <S.OutingListWrapper>
        <S.OutingListItem rightLine>
          <S.Layer>2층</S.Layer>
          <S.StudentInfo>2216 이진우</S.StudentInfo>
        </S.OutingListItem>
        <S.OutingListItem rightLine>
          <S.Layer>3층</S.Layer>
        </S.OutingListItem>
        <S.OutingListItem rightLine>
          <S.Layer>4층</S.Layer>
        </S.OutingListItem>
        <S.OutingListItem>
          <S.Layer>기타</S.Layer>
        </S.OutingListItem>
      </S.OutingListWrapper>
      <S.TotalPeople>총원 : 30명</S.TotalPeople>
    </S.Container>
  );
};

export default OutingList;
