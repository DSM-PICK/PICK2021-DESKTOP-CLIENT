import { FC } from "react";
import Calendar from "./Calendar/Calendar";
import * as S from "./styles";

const ManageSchedule: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.ManageScheduleContainer>
        <span>
          <S.PageTitle>일정관리</S.PageTitle>
          <S.ButtonContainer>
            <S.DownloadSchedule>일정 받기</S.DownloadSchedule>
            <S.EditSchedule>일정 수정</S.EditSchedule>
          </S.ButtonContainer>
        </span>
        <Calendar />
      </S.ManageScheduleContainer>
    </S.Container>
  );
};

export default ManageSchedule;
