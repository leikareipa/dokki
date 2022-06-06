const {VueLoaderPlugin} = require("vue-loader");
const path = require("path");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.vue$/i,
                resourceQuery: /blockType=api-reference/,
                loader: path.resolve("./src/sfc-api-reference.loader.js"),
            },
            {
                test: /\.vue$/i,
                use: "vue-loader",
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.woff2?$/,
                    use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ],
    },
    entry: {
        "dokki.dev": "./src/dokki-dev.js",
        "dokki": "./src/dokki-prod.js",
    },
    output: {
        library: {
            name: "dokki",
            type: "umd",
        },
        path: path.resolve(__dirname, "distributable"),
        filename: "[name].js",
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};
