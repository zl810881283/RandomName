/**
 * webpack.config.js
 * Created by Huxley on 11/30/15.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        ng2: [
            'angular2/bundles/angular2-polyfills',
            './www/ng2'
        ],
        app: './www/app'
    },
    output: {
        path: './www/build',
        filename: '[name].bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.jsx?$/, loader: "source-map", exclude: [/node_modules/]}
        ],
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.json$/, loader: 'json'},
            {
                test: /\.tsx?$/, loader: 'ts',
                exclude: [/node_modules/]
            },
            {test: /\.less$/, loader: 'raw!autoprefixer!less'},
            {test: /\.scss$/, loader: 'raw!autoprefixer!sass'}
        ]
    },
    resolve: {
        extensions: ['', '.json', '.ts', '.js', '.less'],
        modulesDirectories: ['node_modules', './ www']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'ng2',
            minChunks: Infinity
        })
    ],
    devServer: {
        inline: true,
        colors: true,
        historyApiFallback: true,
        contentBase: './www',
        publicPath: '/build/'
    }
};
