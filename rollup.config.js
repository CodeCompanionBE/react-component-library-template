import tsc from '@rollup/plugin-typescript';
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
	plugins: [tsc()],
	output: {
		dir: 'build',
		format: 'esm',
		preserveModules: true,
		preserveModulesRoot: 'src',
	},
};

export default config;
