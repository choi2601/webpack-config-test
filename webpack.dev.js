const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const StylelintPlugin = require('stylelint-webpack-plugin');

const config = {
    mode: 'development',
    devServer: {
        open: false,
        overlay: true,
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        historyApiFallback: {
            rewrites: [
                {from: /./, to: '404.html'}
            ]
        },
        port: 3000,
    },
    plugins: [
        new StylelintPlugin()
    ]
}

module.exports = merge(common, config);