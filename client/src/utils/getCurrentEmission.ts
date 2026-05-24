// client/src/utils/getCurrentEmission.ts
import { SCHEDULE } from '../config/schedule';
import { EMISSIONS } from '../config/emissions';

import {
  getCurrentMinutes,
  getRadioDay,
  toMinutes,
} from './radioTime';

export const getCurrentEmission = () => {
  const radioDay = getRadioDay();
  const currentMinutes = getCurrentMinutes();

  const match = SCHEDULE.find((block) => {
    if (!block.days.includes(radioDay)) {
      return false;
    }

    const start = toMinutes(block.start);
    const end = toMinutes(block.end);

    return currentMinutes >= start && currentMinutes < end;
  });

  return match?.emission || EMISSIONS.DEFAULT;
};