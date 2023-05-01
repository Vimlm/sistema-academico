import { Teacher } from "./teacher.controller";
import { Course } from "./course.controller";

export type Class = {
  id: number;
  name: string;
  description: string;
  teacher_id: Teacher;
  course_id: Course;
}