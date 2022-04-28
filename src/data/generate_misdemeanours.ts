import { MisdemeanourEntry } from "./misdemeanour_entry";
import { Misdemeanour, Misdemeanours } from "./misdemeanours";

// export const Misdemeanours = [
//   "rudeness",
//   "vegetables",
//   "lift",
//   "united",
// ] as const;
// export type Misdemeanour = typeof Misdemeanours[number];

export default async function generateMisdemeanours(
  number: number
): Promise<Array<MisdemeanourEntry>> {
  // pretend this is an API we're calling, wait 1.5s
  await sleep(1500);

  let amount = number ?? 50;

  const misdemeanours: Array<MisdemeanourEntry> = [];

  for (let i = 0; i < amount; i++) {
    misdemeanours.push({
      citizenId: Math.floor(i + rand(37) * rand(967)),
      date: new Date().toLocaleDateString(),
      misdemeanour: choose<Misdemeanour>([...Misdemeanours]),
    });
  }

  return misdemeanours;
}

function rand(x: number): number {
  return Math.random() * x;
}

/// take just one T from an array of T
function choose<T>(arr: Array<T>): T {
  if (!arr) arr = [];
  return arr[Math.floor(Math.random() * arr.length)];
}

// In the real world, you wouldn't want to fake a 'sleep' like this, but for our purposes of faking an API
// this quick-and-dirty solution will do the job.
const sleep = async (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
