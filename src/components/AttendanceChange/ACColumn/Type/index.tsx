import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "../../styles";
import { COLOR } from "../../../../style";

const AttendanceChange: FC = (): JSX.Element => {
  const ACListArray: string[] = ["결석일", "결석자", "종류", "신고자", "비고"];
  const TypesArray: string[] = ["외출", "현체", "귀가", "이동", "취업"];
  const [typeIndex, setTypeIndex] = useState<number>(0);
  const TypesRefs = useRef(new Array(TypesArray.length));
  const TestArray = [];

  for (let i = 0; i < 20; i++) {
    TestArray.push(i);
  }

  const changeTypeIndex = (index: number) => {
    setTypeIndex(index);
  };

  useEffect(() => {
    for (let i = 0; i < ACListArray.length; i++) {
      TypesRefs.current[i].style.backgroundColor = `${COLOR.white}`;
      TypesRefs.current[i].style.color = `${COLOR.black}`;
    }
    TypesRefs.current[typeIndex].style.backgroundColor = `${COLOR.orange}`;
    TypesRefs.current[typeIndex].style.color = `${COLOR.white}`;
  }, [typeIndex]);

  return (
    <S.ACColumn>
      <S.ACTitle>종류</S.ACTitle>
      <S.TypeBox>
        <S.Types>
          {TypesArray.map((value: string, index: number) => {
            return (
              <S.Type
                ref={(el) => (TypesRefs.current[index] = el)}
                key={index}
                onClick={() => changeTypeIndex(index)}
              >
                {value}
              </S.Type>
            );
          })}
        </S.Types>
      </S.TypeBox>
    </S.ACColumn>
  );
};

export default AttendanceChange;
