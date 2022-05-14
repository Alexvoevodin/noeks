const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = process.env.NODE_ENV;
console.info("MODE: " + mode);

module.exports = {
	mode: mode,
	devtool: "source-map",
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	output: {
		filename: "[name][fullhash].js",
		assetModuleFilename: "assets/[hash][ext]",
		clean: true,
	},
	devServer: {
		open: true,
		hot: true,
		port: "auto",
		static: {
			directory: "src/",
			watch: true,
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html"
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css',
			chunkFilename: '[id].[hash:8].css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										{
											//options
										},
									],
								],
							},
						},
					},
					"sass-loader"
				],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},

			{
				test: /\.html$/i,
				loader: "html-loader"
			},

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource"
			},

			{
				test: /\.pug$/,
				loader: "pug-loader",
				exclude: /(node_modules|bower_components)/,
			},

			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
}