import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
	darkMode: 'media',
	//   safelist: 'p-3 p-4 p-5',
	//   theme: {
	//     extend: {
	//       colors: {
	//         teal: {
	//           100: '#096',
	//         },
	//       },
	//     },
	//   },
	alias: {
		'heading': 'text-center font-bold text-lg'
	},
	plugins: [formsPlugin],
	shortcuts: {
		btn: 'bg-blue-500 rounded rounded-lg hover:bg-blue-600',
		link: 'text-blue-600 hover:text-blue-400'
	}
});
