// client/src/config/schedule.ts

import { EMISSIONS, type EmissionConfig } from './emissions';

export type ScheduleBlock = {
  days: number[];
  start: string;
  end: string;
  emission: EmissionConfig;
};

export const SCHEDULE: ScheduleBlock[] = [
  // =========================
  // WAKE UP
  // =========================

  {
    days: [0, 1, 2, 3, 4, 5, 6],
    start: '06:30',
    end: '09:30',
    emission: EMISSIONS.GROOVE_WAKE_UP,
  },

  // =========================
  // WEEK
  // =========================

  {
    days: [1, 2, 3, 4, 5],
    start: '09:30',
    end: '11:30',
    emission: EMISSIONS.MORNING_CHILL,
  },

  {
    days: [1, 2, 3, 4, 5],
    start: '11:30',
    end: '13:30',
    emission: EMISSIONS.GROOVY_LUNCH,
  },

  {
    days: [1, 2, 3, 4, 5],
    start: '13:30',
    end: '15:30',
    emission: EMISSIONS.NAP_CHILL,
  },

  {
    days: [1, 2, 3, 4, 5],
    start: '15:30',
    end: '20:30',
    emission: EMISSIONS.GROOVY_EVENING,
  },

  // =========================
  // WEEK EVENING
  // =========================

  {
    days: [1, 3, 5],
    start: '20:30',
    end: '22:30',
    emission: EMISSIONS.GROOVE_PARTY,
  },

  {
    days: [2, 4],
    start: '20:30',
    end: '22:30',
    emission: EMISSIONS.TROPIK_GROOVE,
  },

  // =========================
  // WOLF HOUR
  // =========================

  {
    days: [0, 1, 2, 3, 4, 5],
    start: '22:30',
    end: '24:00',
    emission: EMISSIONS.WOLF_HOUR,
  },

  {
    days: [0, 1, 2, 3, 4, 5],
    start: '00:00',
    end: '00:30',
    emission: EMISSIONS.WOLF_HOUR,
  },

  // =========================
  // SLEEPY NIGHT
  // =========================

  {
    days: [0, 1, 2, 3, 4, 5],
    start: '00:30',
    end: '06:30',
    emission: EMISSIONS.SLEEPY_NIGHT,
  },

  // =========================
  // SATURDAY DAY
  // =========================

  {
    days: [6],
    start: '09:30',
    end: '20:30',
    emission: EMISSIONS.WEEKEND_SATURDAY,
  },

  // =========================
  // SATURDAY PARTY
  // =========================

  {
    days: [6],
    start: '20:30',
    end: '24:00',
    emission: EMISSIONS.SATURDAY_PARTY,
  },

  {
    days: [6],
    start: '00:00',
    end: '01:30',
    emission: EMISSIONS.SATURDAY_PARTY,
  },

  // =========================
  // SATURDAY WOLF
  // =========================

  {
    days: [6],
    start: '01:30',
    end: '03:30',
    emission: EMISSIONS.SATURDAY_WOLF_HOUR,
  },

  // =========================
  // SATURDAY SLEEPY
  // =========================

  {
    days: [6],
    start: '03:30',
    end: '06:30',
    emission: EMISSIONS.SLEEPY_NIGHT_SATURDAY,
  },

  // =========================
  // SUNDAY
  // =========================

  {
    days: [0],
    start: '09:30',
    end: '22:30',
    emission: EMISSIONS.WEEKEND_SUNDAY,
  },
];