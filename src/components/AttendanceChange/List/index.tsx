import { FC, useState } from "react";
import * as S from "../styles";
import { COLOR } from "../../../style/index";

interface Props {
  date: string;
  name: string;
  type: string;
  teacherName: string;
  reason: string;
}

const List: FC<Props> = ({
  date,
  name,
  type,
  teacherName,
  reason,
}): JSX.Element => {
  const [settingModal, setSettingModal] = useState<boolean>(false);

  const openModal = () => {
    setSettingModal(!settingModal);
  };

  return (
    <S.ACListColumns>
      <S.ACListCells>{date}</S.ACListCells>
      <S.ACListCells>{name}</S.ACListCells>
      <S.ACListCells>{type}</S.ACListCells>
      <S.ACListCells>{teacherName}</S.ACListCells>
      <S.ACListCells>{reason}</S.ACListCells>
      <S.ACListSettings onClick={openModal}>
        <div />
        <div />
        <div />
      </S.ACListSettings>
      <S.SettingModal display={settingModal ? "grid" : "none"}>
        <S.SettingSelection color={COLOR.gray}>수정</S.SettingSelection>
        <S.SettingSelection color={COLOR.red}>삭제</S.SettingSelection>
      </S.SettingModal>
    </S.ACListColumns>
  );
};

export default List;
