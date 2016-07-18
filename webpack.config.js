module.exports = {
    entry: './src/Application/main.js',
    output: {
        path: process.cwd(),
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.jade$/,
                loader: 'html!jade-html'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    devtool: '#source-map'
}
