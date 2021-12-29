import { FC } from "react";
import { useRecoilState } from "recoil";
import { WordLength } from "../../../../state/atom/ATChange";
import * as S from "../../styles";

const Reason: FC = (): JSX.Element => {
  const [wordLength, setWordLength] = useRecoilState<number>(WordLength);

  const checkWordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordLength(e.target.value.length);
  };

  return (
    <>
      <S.ACColumn>
        <S.ACTitle>비고</S.ACTitle>
        <S.NoteBox>
          <S.NoteInput
            type="text"
            placeholder="최대 10글자로 입력해주세요 (선택)"
            onChange={checkWordLength}
          />
        </S.NoteBox>
      </S.ACColumn>
    </>
  );
};

export default Reason;
