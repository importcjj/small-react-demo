module.exports = {
    entry: {
        entry: './entry.js'
    },
    output: {
        path: './build',
        filename: '[name].js',
        publicPath: './build'
    },
    module: {
        loaders : [
            {test: /\.js$/, loader: 'jsx-loader'},
            {test: /\.css$/, loader: 'style-loader!css'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?size=8192'}
        ]
    }
}
