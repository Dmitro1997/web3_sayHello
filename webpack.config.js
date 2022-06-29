const webpack = require('webpack') // eslint-disable-line no-unused-vars
const path = require('path')

module.exports = {
    context: __dirname,
    entry: {
        index: './src/assets/js/index.js',
    },
    mode: 'none',
    output: {
        path: path.join(__dirname, './src/build/js'),
        publicPath: './src/build/js',
        filename: '[name].min.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
}
