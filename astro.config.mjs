// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// GitHub Pages: https://<user>.github.io/<repo>/
// If the repository or account name changes, update `site` and `base`.
export default defineConfig({
	site: 'https://anniinas.github.io',
	base: '/vita-devlog',
	integrations: [
		starlight({
			title: 'Vita Devlog',
			description: 'Devlog and documentation for Project Vita, an isometric life-simulation sandbox made in Godot.',
			plugins: [
				starlightBlog({
					title: 'Devlog',
					postCount: 10,
					recentPostCount: 5,
				}),
			],
			sidebar: [
				{
					label: 'The game',
					items: [{ autogenerate: { directory: 'game' } }],
				},
			],
		}),
	],
});
