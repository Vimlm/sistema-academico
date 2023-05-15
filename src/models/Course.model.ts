import { Student } from './student.model';

export class Course {
  id? : number;
  name? : string;
  createdAt? : Date;
  updatedAt? : Date;
  id_student? : Student;
};
