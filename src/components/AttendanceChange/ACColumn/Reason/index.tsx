import { FC, useLayoutEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ReasonAtom } from "../../../../state/atom/ATChange";
import { StudentObject, SelectedIndex } from "../../../../state/atom/ATChange";
import * as S from "./styles";
import { ACColumn } from "../../styles";
import { StudentObjectType } from "../../../../../interface/ATChange";

const Reason: FC = (): JSX.Element => {
  const [reason ,setReason] = useRecoilState(ReasonAtom);
  const [studentObject, setStudentObject] = useRecoilState<StudentObjectType | any>(StudentObject);
  const selectedIndex = useRecoilValue(SelectedIndex);
  
  const checkWordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
    setStudentObject(studentObject.length === 0 ? studentObject : (prevArr : any) => prevArr.map((value : any) => {
      return value.id === selectedIndex ? { ...value, reason: e.target.value } : value;
    }))
  };

  useLayoutEffect(() => {
    if(studentObject.length === 0) return;
    setReason(studentObject.find((value : StudentObjectType) => value.id === selectedIndex).reason)
  }, [selectedIndex])

  return (
      <ACColumn>
        <S.ACTitle>비고</S.ACTitle>
        <div>
          <S.NoteInput
            type="text"
            placeholder="최대 10글자로 입력해주세요 (선택)"
            onChange={checkWordLength}
            value={reason}
          />
        </div>
      </ACColumn>
  );
};

export default Reason;
