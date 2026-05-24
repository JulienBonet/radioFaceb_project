// client/src/utils/mergeScheduleBlocks.ts

import type { ScheduleBlock } from '../config/schedule';

const isContinuous = (end: string, start: string) => {
  // cas normal
  if (end === start) {
    return true;
  }

  // continuité minuit
  if (end === '24:00' && start === '00:00') {
    return true;
  }

  return false;
};

export function mergeScheduleBlocks(
  blocks: ScheduleBlock[]
): ScheduleBlock[] {
  const merged: ScheduleBlock[] = [];

  for (const block of blocks) {
    const previous = merged.at(-1);

    if (
      previous &&
      previous.emission === block.emission &&
      isContinuous(previous.end, block.start)
    ) {
      previous.end = block.end;
    } else {
      merged.push({ ...block });
    }
  }

  return merged;
}