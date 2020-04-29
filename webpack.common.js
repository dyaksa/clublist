const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    /* entry point */
    entry: "./app.js",
    /* output */
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    /* module */
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                /* style-loader */
                {
                    loader: "style-loader"
                },
                /* css-loader */
                {
                    loader: "css-loader"
                }
            ]
        }]
    },
    /* Plugins */
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        })
    ]
}