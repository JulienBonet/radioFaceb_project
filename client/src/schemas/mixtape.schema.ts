import { z } from 'zod';

const mixcloudRegex = /^[A-Z0-9_-]+\/[a-z0-9-]+$/i;

const hearthisRegex = /^[0-9]+$/;

export const mixtapeSchema = z
  .object({
    title: z.string().min(2, 'Minimum 2 caractères'),

    platform: z.enum(['mixcloud', 'hearthis']),

    embed_ref: z.string(),

    genre_id: z.number(),

    // is_published: z.union([z.boolean(), z.number()]).transform(Boolean),
    is_published: z.boolean(),

    cover: z.string().optional(),

    presentation: z.string().nullable().optional(),

    tracklist: z.string().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.platform === 'mixcloud' && !mixcloudRegex.test(data.embed_ref)) {
      ctx.addIssue({
        code: 'custom',
        path: ['embed_ref'],
        message: 'Format Mixcloud invalide',
      });
    }

    if (data.platform === 'hearthis' && !hearthisRegex.test(data.embed_ref)) {
      ctx.addIssue({
        code: 'custom',
        path: ['embed_ref'],
        message: 'ID HearThis invalide',
      });
    }
  });

export type MixtapeFormValues = z.output<typeof mixtapeSchema>;
