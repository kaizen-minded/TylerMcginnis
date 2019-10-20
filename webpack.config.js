const path = require('path');
const HtmlWebpackPlugIn = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugIn({
            template: 'app/index.html'
        })
    ]
}