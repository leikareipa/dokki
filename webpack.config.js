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
    entry: {
        "dokki.dev": './src/dokki-dev.js',
        "dokki": './src/dokki-prod.js',
    },
    output: {
        library: {
            name: "dokki",
            type: "umd",
        },
        path: path.resolve(__dirname, "distributable"),
        filename: "[name].js",
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    externals: {
        vue: 'Vue',
    }
};
