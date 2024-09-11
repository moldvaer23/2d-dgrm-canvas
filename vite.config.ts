import { defineConfig } from 'vite'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import { checker } from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			overlay: true,
			typescript: {
				tsconfigPath: './tsconfig.app.json',
			},
		}),
		svgr(),
	],
	server: {
		port: 3000,
	},
	build: {
		sourcemap: true,
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, 'src/app'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@app-types': path.resolve(__dirname, 'src/types'),
			'@app-config': path.resolve(__dirname, 'src/config'),
		},
	},
})
