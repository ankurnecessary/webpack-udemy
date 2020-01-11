const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
		main: ['./src/main.js']
	},
	mode: 'production',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: "/"
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
						loader: MiniCSSExtractPlugin.loader
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
						loader: "html-loader"
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
		}),
		new OptimizeCSSAssetsPlugin(),
		new MiniCSSExtractPlugin({
			filename: "[name]-[contenthash].css"
		})
	]
}