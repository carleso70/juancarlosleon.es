import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const blog = await getCollection('blog', ({ data }) => !data.draft);
	const herramientas = await getCollection('herramientas', ({ data }) => !data.draft);
	const contraindicaciones = await getCollection('contraindicaciones', ({ data }) => !data.draft);

	const items = [
		...blog.map(p => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/blog/${p.id}/` })),
		...herramientas.map(p => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/herramientas/${p.id}/` })),
		...contraindicaciones.map(p => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/contraindicaciones/${p.id}/` })),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
