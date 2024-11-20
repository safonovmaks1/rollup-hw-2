import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import styles from 'rollup-plugin-styles';

export default {
	input: './index.js',
	output: {
		file: './dist/bundle.js',
		format: 'cjs',
	},
	plugins: [
		serve({ open: true }),
		livereload(),
		resolve(),
		babel({ babelHelpers: 'bundled' }),
		styles(),
		image(),
	],
};
