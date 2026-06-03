// server/src/validation/mixtape.schema.js
import { z } from 'zod';

const mixcloudRegex =
  /^[A-Z0-9_-]+\/[a-z0-9-]+$/i;

const hearthisRegex = /^[0-9]+$/;

export const validateEmbedRef = (data, ctx) => {
  if (data.platform === 'mixcloud') {
    if (
      !mixcloudRegex.test(data.embed_ref)
    ) {
      ctx.addIssue({
        path: ['embed_ref'],
        message:
          'Invalid Mixcloud format',
      });
    }
  }

  if (data.platform === 'hearthis') {
    if (
      !hearthisRegex.test(data.embed_ref)
    ) {
      ctx.addIssue({
        path: ['embed_ref'],
        message:
          'Invalid HearThis ID',
      });
    }
  }
};

export const createMixtapeSchema = z
  .object({
    title: z.string().min(2).max(255),

    slug: z.string().optional(),

    cover: z.string().optional(),

    embed_ref: z.string(),

    platform: z.enum(['mixcloud', 'hearthis']),

    presentation: z.string().optional().nullable(),

    tracklist: z.string().optional().nullable(),

    genre_id: z.number().int(),

    is_published: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    validateEmbedRef(data, ctx);
  });

  export const updateMixtapeSchema = z
  .object({
    title: z.string().min(2).max(255).optional(),

    slug: z.string().optional(),

    cover: z.string().optional(),

    embed_ref: z.string().optional(),

    platform: z.enum(['mixcloud', 'hearthis']).optional(),

    presentation: z.string().optional().nullable(),

    tracklist: z.string().optional().nullable(),

    genre_id: z.number().int().optional(),

    is_published: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    // validation conditionnelle uniquement si présent
    if (data.platform && data.embed_ref) {
      validateEmbedRef(data, ctx);
    }
  });