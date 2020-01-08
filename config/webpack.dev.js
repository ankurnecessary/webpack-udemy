const path = require("path");
module.exports = {
	entry: {
		main: ['./src/main.js']
	},
	mode: 'development',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: "/"
	},
	devServer: {
		contentBase: "dist",
		overlay: true
	},
	module: {
		rules: [
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
						// It decides the name of the file in which HTML to be kept
						loader: "file-loader",
						options: {
							name: '[name].html'
						}
					},
					{
						// Tells webpack to make a separate file
						loader: "extract-loader"
					},
					{
						// HTML linting
						loader: "html-loader",
						options: {
							attrs: ["img:src"]
						}
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
	}
}