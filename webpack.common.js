const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//loader는 파일을 해석하고 변환하는 과정에 관여하여 모듈을 처리
//plugin은 해당 결과물의 형태를 바꾸는 역할을 하므로 번들링된 파일을 처리

const isProduction = process.env.NODE_ENV === 'PRODUCTION';
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [ //filename.module.scss => css modules(지역적으로 사용), //filename.scss => global 범위에서 사용
            {
                test: /\.s?css$/,
                oneOf: [ //여러 룰 중에 하나의 룰이 적용이 되게끔
                    {
                        test: /\.module\.s?css$/, //첫 번째 룰: module.scss일 경우
                        use: [
                            // {
                            //     loader: 'style-loader',
                            //     options: {
                            //         injectType: 'singletonStyleTag'
                            //     },
                            // },
                            {
                                loader: MiniCssExtractPlugin.loader //MiniCssExtractPlugin과 style-loader는 같이 사용하면 안됨
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true
                                }
                            },
                            'sass-loader' //체이닝: 여러 loader를 넣고 배열 내에 큰 인덱스부터 작은 인덱스대로 순차적으로 실행(sass-loader => css-loader => MiniCssExtractPlugin).
                        ]   
                    }, {
                        use: [ //2번째 룰: module.scss가 아닌 경우에 적용(loader를 순차적으로 문자열로 축약)
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                ]
            }, {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }, {
                test: /\.(png|jpg?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name() {
                            if(!isProduction) {
                                return '[path][name].[ext]';
                            }

                            return '[contenthash].[ext]';
                        },
                        publicPath: 'assets/',
                        outputPath: 'assets/'
                    }
                }]
            }, {
                test: /\.svg$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    }, 
    plugins: [ //webpack으로 변환한 파일에 추가적으로 기능을 더하고 싶을 때 사용, //로더(loader)가 파일 단위로 처리한다고 하면 플러그인은 번들된 결과물을 처리함
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './template.hbs',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            },
            minify: isProduction ? {
                collapseWhitespace: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true,
            } : false
        }),
        new webpack.DefinePlugin({
            IS_PRODUCTION: isProduction,
        }),      
        new MiniCssExtractPlugin() 
    ]
}