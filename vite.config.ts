import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		setupFiles: ['test.setup.ts'],
		globals: true,
		environment: 'happy-dom',
	},
});
