import { FC, useState } from "react";
import * as S from "./styles";
import { SelectedIndex, StudentObject } from "../../../state/atom/ATChange";
import { useRecoilState } from "recoil";
import { StudentObjectType } from "../../../interface/ATChange/index";

interface Props {
  id: number;
  gcn: number;
  name: string;
}

const SelectedStudent: FC<Props> = ({ id, gcn, name }) => {
  const [selected, setSelected] = useState<boolean>(true);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useRecoilState<number>(SelectedIndex);
  const [studentObejct, setStudentObject] = useRecoilState(StudentObject);

  const deleteStudent = (id : number) => {
    setStudentObject(
      studentObejct.filter(
        (value: StudentObjectType) => value.id != id
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
            deleteStudent(id);
          }}
        >
          삭제
        </S.Delete>
      </S.SelectedStudents>
    </>
  );
};

export default SelectedStudent;
