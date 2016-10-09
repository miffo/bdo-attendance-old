var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './resources/assets/typescript/polyfills.ts',
        app: './resources/assets/typescript/main.ts',
        vendor: './resources/assets/typescript/vendor.ts'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css', '.html']
    },
    output: {
        path: "public/app",
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.css$/, exclude: './resources/style', loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]'}
        ]
    },
    plugins: [
        //new HtmlWebpackPlugin({ publicPath: '/', filename:'./resources/views/welcome.php', template:'./resources/views/welcome.template.php' })
    ]
};