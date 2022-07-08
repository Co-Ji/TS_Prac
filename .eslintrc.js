module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'import/no-unresolved': [2, { caseSensitive: false }],
		'react/function-component-definition': [
			2,
			{ namedComponents: 'arrow-function' },
		],
		'import/extensions': [
			2,
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', '@types'],
			},
			typescript: {}, // 프로젝트 Root의 tsconfig.json을 찾는다.
		},
	},
};
