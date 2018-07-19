const webpack = require('webpack');
const config = require('./webpack.config.js');
webpack(config, function (err, stats) {
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: true,
        chunks: true,
        chunkModules: false
    }) + '\n\n')
})