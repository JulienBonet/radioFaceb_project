// utils/getScheduleByDay.ts
import { SCHEDULE } from '../config/schedule';
import { toMinutes } from './radioTime';

export function getScheduleByDay(day: number) {
  return SCHEDULE
    .filter((block) => block.days.includes(day))
    .sort(
      (a, b) =>
        toMinutes(a.start) - toMinutes(b.start)
    );
}