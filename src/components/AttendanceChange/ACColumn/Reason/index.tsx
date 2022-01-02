import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { ReasonAtom } from "../../../../state/atom/ATChange";
import * as S from "./styles";
import { ACColumn } from "../../styles";

const Reason: FC = (): JSX.Element => {
  const setReason = useSetRecoilState(ReasonAtom);
  
  const checkWordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  return (
    <>
      <ACColumn>
        <S.ACTitle>비고</S.ACTitle>
        <div>
          <S.NoteInput
            type="text"
            placeholder="최대 10글자로 입력해주세요 (선택)"
            onChange={checkWordLength}
          />
        </div>
      </ACColumn>
    </>
  );
};

export default Reason;
