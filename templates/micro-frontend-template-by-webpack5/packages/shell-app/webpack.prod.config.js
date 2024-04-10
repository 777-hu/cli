/*
 * @Description:
 * @Author: yuqing.hao
 * @Date: 2019-12-12 16:15:15
 * @LastEditTime: 2022-01-26 15:33:58
 * @LastEditors: menglong.du
 */

class DynamicPublicPathPlugin {
	/**
	 * The Webpack hook to apply our plugin.
	 * @parem {Object} compiler - The Webpack compiler.
	*/
	apply(compiler) {
	  
	  compiler.hooks.make.tap("MutateRuntime", (compilation) => {
  
		compilation.hooks.runtimeModule.tap("MutateRuntime", (module, chunk) => {
  
		  const isPublicPathRuntimeModule = module.constructor.name === "PublicPathRuntimeModule";
  
		  if (!isPublicPathRuntimeModule) { return; }
  
		  console.log(`* Update "${chunk.name}" dynamic public path`);
  
		  // We extract the variable "key" (the namespace to left of the equals sign)
		  // and leave the rest behind as we are going to build our own new value
		  // and assign it back to the variable.
		  const [key] = module.getGeneratedCode().split("=");
  
		  // Swap out the old static string value for a function that will run in
		  // the browser session and create a public path based on the current
		  // configuration. 
		  // 
		  // We create the `publicPath` from the "environment.config.json" and 
		  // "location.config.json" configuration files that are saved as global
		  // variables in the browser `__ENVIRONEMENT__` and `__LOCATION__`.
		  module._cachedGeneratedCode = `${key}=(function() {
			const { __LOCATION__,  __ENVIRONEMENT__ } = window;
			const { href } = __LOCATION__.shell[__ENVIRONEMENT__];
			const publicPath = href + "/";
			
			return publicPath;
		  })();`
  
		  return module;
  
		});
	  });
	}
  }
const webpack = require('webpack');
const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractCssAssetsPlugin = require("extract-css-assets-webpack-plugin")

const locationConf = require(path.resolve(__dirname, 'location.config.json'));
console.log('locationConf', locationConf);
const remotes = [
	"basic-data-app",
	"common-lib",
]
const tags = {
	headTags: remotes.map(remote => `${locationConf[remote]['production']['href']}/remoteEntry.js`),
}


module.exports = {
	entry: {
		shell: ['@babel/polyfill', path.resolve('.', 'src', 'index.js')]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
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
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
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
			name: "shellApp",
			library: { type: "var", name: "shellApp" },
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
		//new DynamicPublicPathPlugin(),
		new HtmlWebpackPlugin({
			template: 'index-prod.html',
			tags,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "environment.config.json", to: "environment.config.json" },
				{ from: "location.config.json", to: "location.config.json" },
				{ from: "env.sh", to: "env.sh" },
				{ from: "manifest.json", to: "manifest.json" },
				{ from: "tmirob-logo144.png", to: "tmirob-logo144.png" },
				{ from: "favicon.ico", to: "favicon.ico"},
				{
					from: '**',
					to: path.resolve(__dirname, 'dist/'),
					context: path.resolve(__dirname, 'public'),
					globOptions: {
						ignore: ['**.html', '**.ico']
					}
				}
			],
		}),
	],
};
