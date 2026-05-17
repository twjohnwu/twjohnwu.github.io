import { defineCollection, z } from 'astro:content';

const localeEnum = z.enum(['zh-TW', 'en']);

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    urlSlug: z.string(),
    lang: localeEnum,
    company: z.string(),
    title: z.string(),
    period: z.string(),
    location: z.string().optional(),
    bullets: z.array(z.string()),
    order: z.number()
  })
});

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    urlSlug: z.string(),
    lang: localeEnum,
    title: z.string(),
    company: z.string(),
    period: z.string(),
    tagline: z.string(),
    heroMetrics: z.array(z.object({
      value: z.number(),
      label: z.string(),
      suffix: z.string().optional()
    })),
    techStack: z.array(z.string()),
    order: z.number()
  })
});

const sideProjects = defineCollection({
  type: 'content',
  schema: z.object({
    urlSlug: z.string(),
    lang: localeEnum,
    name: z.string(),
    tagline: z.string(),
    techStack: z.array(z.string()),
    repo: z.string().url(),
    highlight: z.string().optional(),
    order: z.number()
  })
});

export const collections = { experience, cases, sideProjects };
