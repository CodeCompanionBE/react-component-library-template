import tsc from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import * as glob from 'glob';
import pkg from './package.json' with { type: 'json' };

function globImportFiles({ extensions }) {
	return [...glob.sync(`./src/**/index.{${extensions.join(',')}}`)];
}

const generateRegexFromPeerDependencies = () => {
	return Object.keys(pkg.peerDependencies).map(
		(dep) => new RegExp(`node_modules/${dep}/`, 'i'),
	);
};

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	input: globImportFiles({ extensions: ['ts', 'tsx'] }),
	external: generateRegexFromPeerDependencies(),
	plugins: [
		tsc({
			tsconfig: './tsconfig.build.json',
			sourceMap: true,
			// inlineSources: true,
			declaration: true,
			declarationDir: 'build',
			rootDir: 'src',
			exclude: [
				'src/**/*.test.ts',
				'src/**/*.test.tsx',
				'src/**/*.stories.tsx',
			],
			// include: ['src/**/*(!.test).ts', 'src/**/*(!.test).tsx'],
		}),
		postcss({
			plugins: [autoprefixer()],
			sourceMap: true,
			extract: true,
			minimize: true,
		}),
	],
	output: {
		dir: 'build',
		format: 'esm',
		preserveModules: true,
		preserveModulesRoot: 'src',
		sourcemap: true,
	},
};

export default config;
