// client/src/utils/radioTime.ts

const RADIO_DAY_START = 6 * 60 + 30; // 06:30

export const toMinutes = (time: string): number => {
  if (time === '24:00') return 1440;

  const [h, m] = time.split(':').map(Number);

  return h * 60 + m;
};

export const getCurrentMinutes = () => {
  const now = new Date();

  return now.getHours() * 60 + now.getMinutes();
};

export const getRadioDay = () => {
  const now = new Date();

  let day = now.getDay();

  const minutes = getCurrentMinutes();

  // avant 06:30 => encore la veille radio
  if (minutes < RADIO_DAY_START) {
    day = (day + 6) % 7;
  }

  return day;
};