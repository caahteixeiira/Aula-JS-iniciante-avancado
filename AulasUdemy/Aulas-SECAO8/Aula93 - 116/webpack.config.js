const path = require('path'); // Commmon JS - trabalha com caminhos 

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
       path: path.resolve(__dirname, 'public', 'assets', 'js'),
       filename: 'bundles.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader', 
                options: {
                  presets: ['@babel/env']   
                }
                
            }
        }]
    },
    devtool: 'source-map' // mapea no arquivo original o erro 
};