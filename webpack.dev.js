const {merge} = require('webpack-merge');
const common = require('./webpack.common');

const config = {
    devServer: {
        open: false,
        overlay: true,
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        port: 3000,
        historyApiFallback: {
            rewrites: [
                {from: /./, to: '404.html'}
            ]
        },
    },
    mode: 'development'
}

module.exports = merge(common, config);