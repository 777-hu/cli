const webpack = require('webpack');
const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const ExtractCssAssetsPlugin = require("extract-css-assets-webpack-plugin")
const MOCK_WEBSITE = require('../../dictionary');
module.exports = {
	entry: {
		shell: ['@babel/polyfill', path.resolve('.', 'src', 'index.js')]
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
				changeOrigin: true,
				logLevel: 'debug',
			},
		},
    compress:true,
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
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				include: path.resolve(__dirname, 'public', 'images'),
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
					{
						loader:'css-loader',
						options: {
							url: false
						}
					},
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
		new CopyPlugin({
			patterns: [
				{
					from: '**',
					to: path.resolve(__dirname, 'dist/'),
					context: path.resolve(__dirname, 'public'),
					globOptions: {
						ignore: ['**.html', '**.ico']
					}
				}
			]
		}),
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
			name: "test",
			library: { type: "var", name: "test" },
			filename: "remoteEntry.js",
			exposes: {
				"./App": "./src/App",
			},
			remotes: {
				basicDataApp: "basicDataApp",
				commonLib: "commonLib",
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
				"react-redux": {
					singleton: true,
				}
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
