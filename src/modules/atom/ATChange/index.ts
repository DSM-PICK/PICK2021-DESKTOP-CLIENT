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
