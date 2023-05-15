import { Teacher } from "./teacher.model";

export class Class {
  id? : number;
  name? : string;
  createdAt? : Date;
  updatedAt? : Date;
  id_teacher? : Teacher;
}