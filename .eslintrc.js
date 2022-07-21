module.exports = {
	root: true,

	env: {
		browser: true,

		es2021: true,

		node: true,
	},

	// https://eslint.org/docs/latest/user-guide/configuring/plugins#specifying-parser
	parser: "vue-eslint-parser",

	extends: [
		"plugin:vue/vue3-essential",
		"plugin:vue/base",
		"airbnb-base",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],

	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",

		sourceType: "module",
	},

	plugins: ["vue", "@typescript-eslint", "prettier"],

	globals: {
		// uni-app开发环境

		uni: true,

		plus: true,

		wx: true,

		getCurrentPages: true,

		UniApp: true,
	},

	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
			},
		},
	},

	rules: {
		"linebreak-style": [0, "error", "windows"],

		"import/prefer-default-export": "off",

		"import/extensions": "off",

		// 在不同目录下会存在同名的组件，这里允许重名

		"vue/multi-word-component-names": "off",

		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
			},
		],

		"no-use-before-define": "off",

		"@typescript-eslint/no-explicit-any": "off",

		"class-methods-use-this": "off",

		"prettier/prettier": [
			"error",
			{
				endofLine: "lf",
				useTabs: true,
			},
		],
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": ["error"],
	},
};
