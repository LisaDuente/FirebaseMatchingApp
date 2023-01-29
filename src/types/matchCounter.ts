import { User } from "./user";

export interface matchCounter {
  user: User;
  counter: number;
  percentage: number;
  matches: string[];
}
