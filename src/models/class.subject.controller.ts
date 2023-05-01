import { Course } from "./course.controller";
import { Teacher } from "./teacher.controller";

export type ClassSubject = {
  id: number;
  name: string;
  description: string;
  teacher_id: Teacher;
  course_id: Course;
}