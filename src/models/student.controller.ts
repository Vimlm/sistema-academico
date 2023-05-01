import { Course } from "./course.controller";

export type Student = {
  id: number;
  name: string;
  email: string;
  phone: string;
  course_id: Course;
}