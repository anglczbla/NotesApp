const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './js/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Path to your index.html file
            filename: 'index.html',   // Output file name
        }),
    ],
    devServer: {

        contentBase: path.join(__dirname, 'dist'),
        compress: true,
    port: 8081,

    },
    mode: 'development',
};
