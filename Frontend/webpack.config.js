var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    devtool: 'inline-source-map',
    entry: ['babel-polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           title: 'Developers And Employees',
           template: 'index.html',
        })
    ]
}