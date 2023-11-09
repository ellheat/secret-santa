// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
	editorConfig: true,
	singleQuote: true,
	trailingComma: 'all',
	tabWidth: 4,
	printWidth: 120,
	arrowParens: 'always',
};

export default config;

// // prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

// /** @type {import("prettier").Config} */
// const config = {
// 	editorConfig: true,
// 	singleQuote: true,
// 	trailingComma: 'all',
// 	tabWidth: 4,
// 	printWidth: 120,
// 	arrowParens: 'always',
// };

// module.exports = config;