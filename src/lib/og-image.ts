export type OgSection = 'blog' | 'contraindicaciones' | 'consulta';

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function wrapText(text: string, maxWidth: number, avgCharWidth: number, maxLines: number): string[] {
	const words = text.trim().split(/\s+/);
	const lines: string[] = [];
	let current = '';
	let i = 0;
	while (i < words.length && lines.length < maxLines) {
		const word = words[i];
		const test = current ? `${current} ${word}` : word;
		if (current === '' || test.length * avgCharWidth <= maxWidth) {
			current = test;
			i++;
		} else {
			lines.push(current);
			current = '';
		}
	}
	if (current && lines.length < maxLines) {
		lines.push(current);
	}

	const truncated = i < words.length;
	if (truncated && lines.length > 0) {
		const last = lines[lines.length - 1].replace(/[.,;:—-]+$/, '');
		lines[lines.length - 1] = `${last}…`;
	}
	return lines;
}

interface SectionStyle {
	label: string | null;
	labelColor: string;
	bg: string;
	leftPanel?: string;
	leftPanelWidth?: number;
	showDescription: boolean;
	showUnderline: boolean;
}

const SECTION_STYLES: Record<OgSection, SectionStyle> = {
	blog: {
		label: null,
		labelColor: '#6B8F71',
		bg: '#6B8F71',
		showDescription: false,
		showUnderline: true,
	},
	contraindicaciones: {
		label: 'CONTRAINDICACIONES',
		labelColor: '#C17A5A',
		bg: '#1C120E',
		leftPanel: '#A0281E',
		leftPanelWidth: 502,
		showDescription: true,
		showUnderline: false,
	},
	consulta: {
		label: 'CONSULTA',
		labelColor: '#6B8F71',
		bg: '#191C26',
		showDescription: true,
		showUnderline: false,
	},
};

export function buildOgSvg({
	section,
	title,
	description,
}: {
	section: OgSection;
	title: string;
	description: string;
}): string {
	const style = SECTION_STYLES[section];
	const W = 1200;
	const H = 630;

	const titleLines = wrapText(title, 540, 30, 3);
	const titleY = [172, 236, 300];

	let bgRects = `<rect width="${W}" height="${H}" fill="${style.bg}"/>`;
	if (style.leftPanel) {
		bgRects += `<rect x="0" y="0" width="${style.leftPanelWidth}" height="${H}" fill="${style.leftPanel}"/>`;
	}

	const labelSvg = style.label
		? `<text x="580" y="98" font-family="Georgia, serif" font-size="17" font-weight="700" letter-spacing="1.8" fill="${style.labelColor}">${escapeXml(style.label)}</text>`
		: '';

	const titleSvg = titleLines
		.map((line, i) => `<tspan x="580" y="${titleY[i]}">${escapeXml(line)}</tspan>`)
		.join('');

	let afterTitleSvg = '';
	if (style.showUnderline) {
		afterTitleSvg = `<rect x="580" y="338" width="130" height="4" fill="#E0C98A"/>`;
	}
	if (style.showDescription) {
		const descLines = wrapText(description, 540, 13, 3);
		const descY = [358, 392, 426];
		afterTitleSvg = descLines
			.map((line, i) => `<text x="580" y="${descY[i]}" font-family="Georgia, serif" font-size="24" fill="#2C2C2A">${escapeXml(line)}</text>`)
			.join('');
	}

	return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
	${bgRects}
	<defs>
		<clipPath id="pillClip">
			<rect x="205" y="225" width="90" height="180" rx="45"/>
		</clipPath>
	</defs>
	<g clip-path="url(#pillClip)">
		<rect x="205" y="225" width="90" height="90" fill="#F3F1EC"/>
		<rect x="205" y="315" width="90" height="90" fill="#E0C98A"/>
	</g>
	<rect x="540" y="40" width="620" height="550" rx="24" fill="#F3F1EC"/>
	${labelSvg}
	<text font-family="Georgia, serif" font-size="54" font-weight="700" fill="#1a1a18">${titleSvg}</text>
	${afterTitleSvg}
	<text x="580" y="562" font-family="Georgia, serif" font-size="18" fill="#888780">juancarlosleon.es</text>
</svg>`;
}
