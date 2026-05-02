import { SCHEDULE } from "../config/schedule";
import { EMISSIONS } from "../config/emissions";

const toMinutes = (time: string): number => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

export const getCurrentEmission = () => {
  const now = new Date();

  const day = now.getDay();
  const prevDay = (day + 6) % 7;

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const matches = [];

  for (const block of SCHEDULE) {
    const start = toMinutes(block.start);
    const end = toMinutes(block.end);
    const isOvernight = end < start;

    // 🟢 CAS 1 : bloc du jour actuel
    if (block.days.includes(day)) {
      const isMatch = isOvernight
        ? currentMinutes >= start || currentMinutes <= end
        : currentMinutes >= start && currentMinutes <= end;

      if (isMatch) {
        matches.push(block);
      }
    }

    // 🔵 CAS 2 : bloc du jour précédent (ONLY overnight blocks)
    else if (block.days.includes(prevDay) && end < start) {
      if (currentMinutes <= end) {
        matches.push(block);
      }
    }
  }

  if (matches.length === 0) {
    return EMISSIONS.DEFAULT;
  }

  // priorité : dernier start
  matches.sort((a, b) => toMinutes(a.start) - toMinutes(b.start));

  return matches.at(-1)!.emission;
};