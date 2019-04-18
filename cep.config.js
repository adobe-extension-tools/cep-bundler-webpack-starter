const path = require('path')
const { createConfig } = require('cep-bundler-webpack')

module.exports = createConfig({
    devHost: '0.0.0.0', 
    out: path.join(__dirname, 'dist'),
    type: 'cep',
    entry: './src/js/index.ts'
});