const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel'],
                    },
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     use: ['eslint-loader']
            // },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            // relative path is from src
            {from: './src/static/img/favicon.ico'}, // <- your path to favicon
        ])
    ]
};