const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = ({ environment = 'dev' } = {}) => {
	return {
		entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'client', 'scripts', 'main.ts')],
		output: {
			filename: '[hash].js',
			path: path.resolve(__dirname, 'client', 'dist'),
			publicPath: './'
		},
		watch: true,
		devServer: {
			publicPath: '/',
			contentBase: path.join(__dirname, 'client', 'dist'),
			compress: true,
			port: 5000,
			inline:true,
		},
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
						}
					]
				}
			]
		},
		context: path.resolve(__dirname, 'client'),
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
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
			new DotenvPlugin({
				sample: path.resolve(__dirname, `.env.${environment}`),
				path: path.resolve(__dirname, `.env.${environment}`),
			}),
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'client', 'index.html'),
			})
		]
	}
};