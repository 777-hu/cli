const webpack = require('webpack');
const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractCssAssetsPlugin = require("extract-css-assets-webpack-plugin");
const MOCK_WEBSITE = require('../../dictionary');
module.exports = {
	entry: {
		'basic-data': ['@babel/polyfill', path.resolve('.', 'src', 'index.js')]
	},
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[contenthash].bundle.js',
	},
	devServer: {
		proxy: {
			'/mock': {
				target: MOCK_WEBSITE,
				ws: true,
				pathRewrite: {'^/mock/55/': ''},
				logLevel: 'debug',
				changeOrigin: true
			},
		}
	},
	mode: 'development',
	target: 'web',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
				  	}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg|png)$/,
				include: path.resolve(__dirname, 'src', 'images'),
				use: [
					'file-loader',
				],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				include: path.resolve(__dirname, 'src', 'style'),
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
	// node: {
	// 	net: 'empty',
	// 	json: 'empty',
	// },
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
		new ModuleFederationPlugin({
			name: "basicDataApp",
			library: { type: "var", name: "basicDataApp" },
			filename: "remoteEntry.js",
			remotes: {
				shellApp: "shellApp",
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
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
};
