import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { selectedStudents, SelectedIndex } from "../../../state/atom/ATChange";
import { useRecoilState } from "recoil";
import { SelectedStudentsType } from "../../../../interface/ATChange/index";

interface Props {
  id: number;
  gcn: number;
  name: string;
}

const SelectedStudent: FC<Props> = ({ id, gcn, name }) => {
  const [selected, setSelected] = useState<boolean>(true);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [selectedStudentsArr, setSelectedStudentsArr] = useRecoilState(selectedStudents);
  const [selectedIndex, setSelectedIndex] = useRecoilState<number>(SelectedIndex);

  const deleteStudent = (gcn: number) => {
    setSelectedStudentsArr(
      selectedStudentsArr.filter(
        (value: SelectedStudentsType) => value.gcn != gcn
      )
    );
  };
  
  return (
    <>
      <S.SelectedStudents
        key={id}
        onMouseEnter={() => setShowDelete(!showDelete)}
        onMouseLeave={() => setShowDelete(!showDelete)}
        onClick={() => {
          setSelected(!selected);
          setSelectedIndex(id);
        }}
      >
        <S.Selected display={selectedIndex === id ? "default" : "none"} />
        {`${gcn} ${name}`}
        <S.Delete
          display={showDelete ? "default" : "none"}
          onClick={(e) => {
            e.stopPropagation();
            deleteStudent(gcn);
          }}
        >
          삭제
        </S.Delete>
      </S.SelectedStudents>
    </>
  );
};

export default SelectedStudent;
