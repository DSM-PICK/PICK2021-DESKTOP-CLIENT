import { atom } from "recoil";
import { useRecoilValue } from "recoil";

export const FModal = atom({
  key: "fopened",
  default: false,
});

export const SModal = atom({
  key: "sopened",
  default: false,
});

export const FDateValue = atom({
  key: "fdate",
  default: "",
});

export const SDateValue = atom({
  key: "sdate",
  default: "",
});

export const ReasonAtom = atom({
  key: "reason",
  default: "",
});

export const searchStatus = atom({
  key: "search",
  default: false,
});

export const searchedStudents = atom({
  key: "searched-students",
  default: [],
});

export const selectedStudents = atom({
  key: "selected-students",
  default: [],
});

export const AttendanceChanges = atom({
  key: "attendance-change",
  default: [],
});

export const StudentObject = atom({
  key: "student",
  default: [
    {
      id: 0,
      gcn: 0,
      name: "",
      date: "",
      type: 0,
      reason: "",
    },
  ],
});

export const SelectedIndex = atom({
  key: "selected-index",
  default: 0,
});
