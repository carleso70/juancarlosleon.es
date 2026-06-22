import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const herramientas = defineCollection({
	loader: glob({ base: './src/content/herramientas', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		url: z.string().url(),
		gratis: z.boolean(),
		etiqueta: z.string(),
	}),
});

const contraindicaciones = defineCollection({
	loader: glob({ base: './src/content/contraindicaciones', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		fuente: z.string(),
		urlFuente: z.string().url(),
	}),
});

export const collections = { blog, herramientas, contraindicaciones };
