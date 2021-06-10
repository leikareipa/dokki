const {VueLoaderPlugin} = require('vue-loader');
const path = require("path");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.vue$/i,
                loader: "vue-loader",
            },
            {
                test: /\.css$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "distributable"),
        filename: "dokki.js",
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    externals: {
        vue: 'Vue',
    }
};
