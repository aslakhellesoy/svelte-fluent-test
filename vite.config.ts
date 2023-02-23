import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';

export default defineConfig({
	plugins: [sveltekit(), svelteFluent()]
});
