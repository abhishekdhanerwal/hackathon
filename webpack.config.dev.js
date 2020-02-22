const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    // devtool:false,
    entry: [
        'webpack-hot-middleware/client?reload=true', // refresh on hot reloading
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    //used to get the detail stack trace
    devtool: 'inline-source-map',
    //used to recompile or live reloading
    devServer: {
        contentBase: './src'
    },
    module: {
        rules: [
            {
                //using this for loading js or jsx
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.s?css$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]
            },
            {
                test: /\.css$/,
                exclude:/node_modules/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  }
                ]
            },
            {
                test: /\.(ico|icon|eot|woff|woff2|ttf|otf)$/,
                exclude: /node_modules/,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                exclude: /node_modules/,
                use: { loader: 'url-loader', options: { limit: 10000, } }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // do cleaning of build folder
        new HtmlWebpackPlugin({ template: './src/public/index.html' }),
        new webpack.HotModuleReplacementPlugin({}), // browser not get refresh but new modules or changes will be inserted
        // new MiniCssExtractPlugin({}),
        new ExtractTextPlugin({filename: 'app.bundle.css'})
        // new ManifestPlugin({
        //     short_name: "Exec Engine",
        //     name: "Monocept",
        //     icons: [{
        //         src: path.resolve('src/public/max_logo.svg'),
        //         sizes: [96, 128, 192, 256, 384, 512]
        //     }],
        //     start_url: ".",
        //     display: "standalone",
        //     theme_color: "#000000",
        //     background_color: "#ffffff"
        // })
    ]
};