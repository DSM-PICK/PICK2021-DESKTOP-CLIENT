import { atom } from "recoil";

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
  default: [],
});

export const SelectedIndex = atom({
  key: "selected-index",
  default: 0,
});

export const TypeIndex = atom({
  key: "type-atom",
  default: 0,
});
