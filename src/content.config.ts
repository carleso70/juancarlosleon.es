import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// El admin (Sveltia CMS) guarda los campos opcionales que se dejan vacíos
// como cadena vacía ('') en lugar de omitirlos. z.coerce.date() e image()
// no aceptan '', así que lo tratamos como si no existiera antes de validar.
const emptyToUndefined = (val: unknown) => (val === '' ? undefined : val);
const optionalDate = () => z.preprocess(emptyToUndefined, z.coerce.date().optional());
const optionalString = () => z.preprocess(emptyToUndefined, z.string().optional());
const optionalUrl = () => z.preprocess(emptyToUndefined, z.string().url().optional());
const optionalImage = (image: (typeof z)['any']) => z.preprocess(emptyToUndefined, z.optional(image));

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: optionalDate(),
			heroImage: optionalImage(image()),
			draft: z.boolean().default(false),
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
		draft: z.boolean().default(false),
	}),
});

const contraindicaciones = defineCollection({
	loader: glob({ base: './src/content/contraindicaciones', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		fuente: optionalString(),
		urlFuente: optionalUrl(),
		heroImage: optionalImage(image()),
		draft: z.boolean().default(false),
	}),
});

const recetas = defineCollection({
	loader: glob({ base: './src/content/recetas', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		etiqueta: z.string(),
		draft: z.boolean().default(false),
	}),
});

const consulta = defineCollection({
	loader: glob({ base: './src/content/consulta', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: optionalDate(),
		heroImage: optionalImage(image()),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, herramientas, contraindicaciones, recetas, consulta };
