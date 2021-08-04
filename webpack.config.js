const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag'
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }, {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './template.hbs',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            },
            minify: {
                collapseWhitespace: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true,
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: {removeAll: true}}]
            },
            canPrint: true
        })
    ],
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'venders',
                    chunks: 'all',
                }
            }
        },
        minimize: true,
        minimizer: [new TerserWebpackPlugin({
            cache: true
        })],
    },
    mode: 'none'
}