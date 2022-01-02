export interface SelectedStudentsType {
  id: number;
  gcn: number;
  name: string;
}

export interface StudentObjectType {
  id: number;
  gcn: number;
  name: string;
  sdate: string;
  fdate: string;
  sclass: number;
  fclass: number;
  type: number;
  reason: string;
}

export interface postDataType {
  state: string;
  term: string;
  student_id: number;
  reason: string
}
