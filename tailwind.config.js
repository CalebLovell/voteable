/* eslint-disable indent */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
	purge: [`./src/**/*.{js,ts,jsx,tsx}`],
	corePlugins: {
		container: false,
	},
	theme: {
		extend: {
			fontFamily: {
				sans: [`Inter var`, ...defaultTheme.fontFamily.sans],
			},
			colors: {
				base: {
					primary: `var(--base-primary)`,
					secondary: `var(--base-secondary)`,
				},
				accent: {
					primary: `var(--accent-primary)`,
					secondary: `var(--accent-secondary)`,
				},
			},
			height: {
				content: `var(--h-content-area)`,
			},
			minHeight: {
				content: `var(--h-content-area)`,
			},
		},
	},
	variants: {},
	plugins: [
		require(`@tailwindcss/forms`),
		function ({ addComponents }) {
			addComponents({
				'.container': {
					width: `100%`,
					marginLeft: `auto`,
					marginRight: `auto`,
					paddingLeft: `1rem`,
					paddingRight: `1rem`,
					'@screen sm': {
						paddingLeft: `1.5rem`,
						paddingRight: `1.5rem`,
					},
					'@screen md': {
						paddingLeft: `3rem`,
						paddingRight: `3rem`,
					},
					'@screen lg': {
						paddingLeft: `6rem`,
						paddingRight: `6rem`,
					},
					'@screen xl': {
						paddingLeft: `9rem`,
						paddingRight: `9rem`,
					},
				},
			});
		},
	],
};
