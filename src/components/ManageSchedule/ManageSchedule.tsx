import { FC, useState } from "react";
import Calendar from "./Calendar/Calendar";
import * as S from "./styles";

const ManageSchedule: FC = (): JSX.Element => {
  const [editStatus, setEditStatus] = useState<boolean>(false);

  return (
    <S.Container>
      <S.ManageScheduleContainer>
        <span>
          <S.PageTitle>일정관리</S.PageTitle>
          <S.ButtonContainer>
            <S.DownloadSchedule
              type="button"
              style={editStatus ? { display: "none" } : { display: "block" }}
              value={"일정 받기"}
            />
            <S.EditSchedule
              value={editStatus ? "완료" : "일정수정"}
              type="button"
              onClick={() => setEditStatus(!editStatus)}
            />
          </S.ButtonContainer>
        </span>
        <Calendar />
      </S.ManageScheduleContainer>
    </S.Container>
  );
};

export default ManageSchedule;
