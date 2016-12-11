let path = require("path");
let webpack= require("webpack");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname,"./src/index.js"),
    output: {
        path:path.resolve(__dirname,"./build"),
        filename: "main.js"
    },
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style!css" }
    //     ]
    // },
    module: {
        loaders: [
            {
            	test: /\.css$/, //这是一个正则表达式，将包括符合格式的loader 
            	loader:  ExtractTextPlugin.extract("style-loader","css-loader")
            },
            {
                test:/\.ejs$/,
                loader: "ejs-loader"
            }

        ]
    },
    plugins:[
    	// new webpack.BannerPlugin('This file is created by dachui'),
    	new ExtractTextPlugin("style.css")
    ]
};