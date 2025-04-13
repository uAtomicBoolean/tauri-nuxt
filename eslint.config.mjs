import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylisticEslint from '@stylistic/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [{
	ignores: ['**/dist/', '**/output/'],
	files: ['**/**.ts', '**/**.js', '**/**.vue'],
}, ...compat.extends(
	'eslint:recommended',
	'plugin:@typescript-eslint/recommended',
	'plugin:vue/essential',
), {
	plugins: {
		'@typescript-eslint': typescriptEslint,
		'@stylistic': stylisticEslint,
		vue,
	},

	languageOptions: {
		globals: {
			...globals.browser,
			...globals.node,
		},

		ecmaVersion: 'latest',
		sourceType: 'module',

		parserOptions: {
			parser: '@typescript-eslint/parser',
		},
	},

	rules: {
		'@stylistic/arrow-spacing': ['error', {
			before: true,
			after: true,
		}],
		'@stylistic/brace-style': ['error', 'stroustrup', {
			allowSingleLine: true,
		}],
		'@stylistic/comma-dangle': ['error', 'always-multiline'],
		'@stylistic/comma-spacing': 'error',
		'@stylistic/comma-style': 'error',
		'@stylistic/dot-location': ['error', 'property'],
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/keyword-spacing': 'error',
		'@stylistic/max-statements-per-line': ['error', { max: 2 }],
		'@stylistic/no-floating-decimal': 'error',
		'@stylistic/no-multi-spaces': 'error',
		'@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
		'@stylistic/no-trailing-spaces': 'error',
		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/semi': ['error', 'always'],
		'@stylistic/space-before-blocks': 'error',
		'@stylistic/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
		'@stylistic/space-in-parens': 'error',
		'@stylistic/space-infix-ops': 'error',
		'@stylistic/space-unary-ops': 'error',
		'@stylistic/spaced-comment': 'error',
		'@stylistic/quotes': ['error', 'single', {
			allowTemplateLiterals: true,
			avoidEscape: true,
		}],

		'curly': ['error', 'multi-line', 'consistent'],
		'handle-callback-err': 'off',
		'max-nested-callbacks': ['error', { max: 4 }],
		'no-console': 'off',
		'no-empty-function': 'error',
		'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
		'no-var': 'error',
		'no-unused-vars': 'off',
		'prefer-const': 'error',
		'yoda': 'error',

		'no-undef': 'off',
		'vue/multi-word-component-names': 'off',
	},
}];