module.exports = {
	lintOnSave: 'error',
	productionSourceMap: process.env.NODE_ENV !== 'production',
	devServer: {
		https: false,
		host: '0.0.0.0',
		port: 8008
	},
	configureWebpack: {
		resolve: {
			alias: {
				assets: '@/assets',
				components: '@/components',
				views: '@/views'
			}
		}
	}
}
