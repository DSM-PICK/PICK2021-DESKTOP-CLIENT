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

export const WordLength = atom({
  key: "length",
  default: 0,
});

export const searchStatus = atom({
  key: "search",
  default: false,
});
