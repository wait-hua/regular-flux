var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {test: /\.html$/, exclude: /node_modules/, loader: 'text-loader'}
        ]
    }
}