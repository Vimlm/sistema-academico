import { Subject } from "./subject.controller";

export type Course = {
  id: number;
  name: string;
  description: string;
  subject_id: Subject;
};
 