const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        index: './src/agent/index.tsx',
        preloader: './src/agent/preloader.js',
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist/agent'),
        filename: '[name].js',
        publicPath: '/dist/agent/'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                // include: path.resolve(__dirname, '*'),
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
};