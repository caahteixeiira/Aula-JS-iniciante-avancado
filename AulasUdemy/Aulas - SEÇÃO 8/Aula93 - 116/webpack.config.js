const path = require('path'); // Commmon JS - trabalha com caminhos 

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: path.resolve(_dirname)
};