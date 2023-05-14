import { Teacher } from "./teacher.model";

export class Class {
  id? : number;
  name? : string;
  description? : string;
  id_teacher? : Teacher;
}