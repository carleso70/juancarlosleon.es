import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { buildOgSvg, type OgSection } from '../../../lib/og-image';

const SECTIONS: OgSection[] = ['blog', 'contraindicaciones', 'consulta'];

export async function getStaticPaths() {
	const paths: { params: { collection: string; slug: string }; props: { section: OgSection; title: string; description: string } }[] = [];

	for (const section of SECTIONS) {
		const entries = await getCollection(section, ({ data }) => !data.draft);
		for (const entry of entries) {
			paths.push({
				params: { collection: section, slug: entry.id },
				props: { section, title: entry.data.title, description: entry.data.description },
			});
		}
	}

	return paths;
}

export const GET: APIRoute = async ({ props }) => {
	const { section, title, description } = props as { section: OgSection; title: string; description: string };
	const svg = buildOgSvg({ section, title, description });
	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return new Response(png, {
		headers: { 'Content-Type': 'image/png' },
	});
};
