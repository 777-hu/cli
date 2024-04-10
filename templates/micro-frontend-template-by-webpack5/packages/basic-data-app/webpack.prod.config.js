const webpack = require('webpack');
const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractCssAssetsPlugin = require("extract-css-assets-webpack-plugin")
module.exports = {
	entry: {
		'basic-data': ['@babel/polyfill', path.resolve('.', 'src', 'index.js')]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[contenthash].bundle.js',
	},
	mode: 'production',
	target: 'web',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
				  	}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg|png)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	externals:{
        'Config': JSON.stringify(require("./config/config.dev.json")),
	},
	plugins: [
		new ExtractCssAssetsPlugin({
			outputPath: 'fonts/fusion-font/',
			// relativeCssPath: '../',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
        new CleanWebpackPlugin(),
		new ModuleFederationPlugin({
			name: "basicDataApp",
			library: { type: "var", name: "basicDataApp" },
			filename: "remoteEntry.js",
			remotes: {
				commonLib: "commonLib",
			},
			exposes: {
				"./basicComponents": "./src/index",
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
			  	},
			  	"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"],
			  	},
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
};
