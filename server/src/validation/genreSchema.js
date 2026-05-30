// server/src/validation/genreSchema.js
import { z } from 'zod';

export const genreSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100),

  color: z
    .string()
    .regex(
      /^#([A-Fa-f0-9]{6})$/,
      'Invalid hex color'
    ),
});