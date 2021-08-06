const {merge} = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

//chunk => main(모듈) vendor(외부모듈) runtime(모듈들을 실제 동작토록 동작) 분리
const config = {
    plugins: [
        new OptimizeCssAssetsPlugin({ //css nano 모듈이 실행되도록
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'), //cssnano는 최소한의 결과를 산출하여 파일 크기를 감소
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
        splitChunks: { //코드를 분리할 때 중복을 없앤다. 코드를 압축하는 것 외에 entry 파일을 여러 개로 나누면 브라우저 속도를 높일 수 있다(큰 파일을 다운로드하는 것보다 작은 파일을 여러개를 동시에 다운로드하는 것이 더 빠름)
            cacheGroups: { //특정 파일들을 청크로 분리할 때 사용. 여기서는 common이랑 청크를 분리
                commons: {
                    test: /[\\/]node_modules[\\/]/, //분리할 대상이 되는 파일
                    name: 'venders', //청크로 분리할 때 이름으로 사용될 파일명. output filename 옵션에 [name]에 대치될 내용
                    chunks: 'all', //모듈의 종류에 따라 청크에 포함할지 말지를 결정
                }
            }
        },
        minimize: true, //webpack 내부에서 terser(default)을 실행토록 함
        minimizer: [new TerserWebpackPlugin({ //자바스크립트 코드를 난독화(Mangling)하고 debugger 구문을 제거한다.
            cache: true
        })], //minimize만 쓰게 되면 terser에 대한 세부설정을 설정할 수 없음
    },
    mode: 'production'
}

module.exports = merge(common, config);