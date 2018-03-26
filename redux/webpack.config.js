const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const src = path.resolve(__dirname, 'src/');
const dist = path.resolve(__dirname, '../app/api/static/js');
console.log(dist);
const config = {
	mode: 'development',
	watch: false,
	watchOptions: {
		ignored: /node_modules/
	},
	entry: {
		'user': path.join(src, 'users/index.jsx'),
		'events': path.join(src, 'calendar/index.jsx')
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'redux': 'Redux'
	},
	output: {
		path: dist,
		filename: '[name].js'
	},
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_DEV': JSON.stringify(process.env.NODE_ENV || 'development')
		})// more info and other optimizations at https://webpack.js.org/guides/production/
	],
	module: {
		rules : [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
module.exports = config;
