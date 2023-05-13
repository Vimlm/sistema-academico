import { Teacher } from "./Teacher.model";

export class Class {
  id? : number;
  name? : string;
  description? : string;
  id_teacher? : Teacher;
}