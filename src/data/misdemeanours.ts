export const Misdemeanours = [
  "rudeness",
  "vegetables",
  "lift",
  "united",
] as const;
export type Misdemeanour = typeof Misdemeanours[number];

export const misdemeanourText = {
  all: "all",
  rudeness: "Mild Public Rudeness = 🤪",
  lift: "Speaking in a Lift = 🗣",
  vegetables: "Not Eating Your Vegetables = 🥗",
  united: "Supporting Manchester United = 😈",
};
