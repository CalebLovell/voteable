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
	plugins: [require(`@tailwindcss/forms`), require(`caleb-tw-plugins`)],
};
