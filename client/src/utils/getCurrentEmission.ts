// client/src/utils/getCurrentEmission.ts
import { SCHEDULE } from "../config/schedule";
import { EMISSIONS } from "../config/emissions";

export const getCurrentEmission = () => {
  const now = new Date();

  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (const block of SCHEDULE) {
    if (!block.days.includes(day)) continue;

    const [sh, sm] = block.start.split(":").map(Number);
    const [eh, em] = block.end.split(":").map(Number);

    const start = sh * 60 + sm;
    const end = eh * 60 + em;

    // 🔥 gestion minuit
    if (end < start) {
      if (currentMinutes >= start || currentMinutes <= end) {
        return block.emission;
      }
    } else {
      if (currentMinutes >= start && currentMinutes <= end) {
        return block.emission;
      }
    }
  }

  return EMISSIONS.DEFAULT;
};