import { Misdemeanour } from "./misdemeanours";

export interface MisdemeanourEntry {
  citizenId: number;
  date: string;
  misdemeanour: Misdemeanour;
  description: string;
  selfConfessed: boolean;
}
