import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
export default {
	content: ['./src/**/*.{html,js,ts}'],
	theme: {
		container: {
			screens: {
				"xl": "1170px"
			}
		},
		extend: {
			colors: {
				'primary': "#C00C00",
			},
		}
	},
	plugins: [typography, containerQueries]
} satisfies Config;
