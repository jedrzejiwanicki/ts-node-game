const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:  path.resolve(__dirname, 'client','scripts', 'main.ts'),
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'client','dist'),
		publicPath: path.resolve(__dirname, 'client','dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'client', 'dist'),
		compress: true,
		port: 5000
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	context: path.resolve(__dirname, 'client'),
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
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client','index.html')})
	]
};