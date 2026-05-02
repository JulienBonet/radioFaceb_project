// utils/getScheduleByDay.ts
import { SCHEDULE } from '../config/schedule';

export function getScheduleByDay(day: number) {
  const blocks = SCHEDULE
    .filter(block => block.days.includes(day))
    .sort((a, b) => a.start.localeCompare(b.start));

  // 🔥 Trouver le point de départ (06:30)
  const startIndex = blocks.findIndex(b => b.start === '06:30');

  // Si pas trouvé → fallback normal
  if (startIndex === -1) return blocks;

  // 🔄 Rotation du tableau
  return [
    ...blocks.slice(startIndex),
    ...blocks.slice(0, startIndex),
  ];
}