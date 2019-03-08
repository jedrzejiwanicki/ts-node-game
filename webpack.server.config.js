const path = require('path');
module.exports = {
	entry:  path.resolve(__dirname, 'server', 'app.ts'),
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'server','dist'),
		publicPath: path.resolve(__dirname, 'server','dist')
	},
	target: "node",
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: ['babel-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
		]
	},
	externals: { uws: "uws" },
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		alias: {
			"@enums": path.resolve(__dirname, 'client', 'scripts', 'enums'),
			"@interfaces": path.resolve(__dirname, 'common', 'interfaces'),
			"@utils": path.resolve(__dirname, 'client', 'scripts', 'utils'),
			"@constants": path.resolve(__dirname, 'client', 'scripts', 'constants'),
			"@assets": path.resolve(__dirname, 'client', 'assets'),
			"@type": path.resolve(__dirname, 'client', 'scripts', 'types'),
			"@factory": path.resolve(__dirname, 'client', 'scripts', 'factory'),
			"@core": path.resolve(__dirname, 'client', 'scripts', 'core'),
			"@api": path.resolve(__dirname, 'client', 'scripts', 'api')
		}
	},
};