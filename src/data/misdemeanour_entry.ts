import { Misdemeanour } from "./misdemeanours";

export interface MisdemeanourEntry {
  citizenId: number;
  date: string;
  misdemeanour: Misdemeanour;
}
