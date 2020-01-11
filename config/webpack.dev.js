const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		main: ['babel-polyfill', './src/main.js']
	},
	devtool: 'inline-source-map', // Don't use it in production
	mode: 'development',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../dist'),
		// publicPath: "/"
	},
	devServer: {
		contentBase: "dist",
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[ext]",
							esModule: false // This is a kind of hack used to remove an issue. So, in future we will remove it
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}