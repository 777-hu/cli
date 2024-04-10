/*
 * @Description:
 * @Author: yuqing.hao
 * @Date: 2019-12-12 16:15:15
 * @LastEditTime: 2022-10-10 16:55:21
 * @LastEditors: yanpin.chen
 */
const webpack = require('webpack');
const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractCssAssetsPlugin = require("extract-css-assets-webpack-plugin")
const MOCK_WEBSITE = require('../../dictionary');
module.exports = {
	entry: {
		'common-lib': ['@babel/polyfill', path.resolve('.', 'src', 'index.js')]
	},
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[contenthash].bundle.js',
	},
	mode: 'development',
	target: 'web',
	devServer: {
		proxy: {
			'/mock': {
				//target: 'http://192.168.30.100:3000/',
				// target: 'http://192.168.28.73:9100',
				// target: 'http://192.168.20.27:9100',
				target: MOCK_WEBSITE,
				ws: true,
				//pathRewrite: {'^/api': ''}
			},
			'/local-manage/register': {
				target: MOCK_WEBSITE,
				ws: true,
				changeOrigin: true,
			}
		}
	},
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
	externals:{
        'Config': JSON.stringify(require("./config/config.dev.json")),
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
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
		new ModuleFederationPlugin({
			name: "commonLib",
			library: { type: "var", name: "commonLib" },
			filename: "remoteEntry.js",
			exposes: {
				"./common": "./src/index",
                "./atom": "./src/style/atom/atom.scss"
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
