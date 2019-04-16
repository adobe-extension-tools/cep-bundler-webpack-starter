const path = require('path')
const { createConfig } = require('cep-bundler-webpack')

module.exports = createConfig({
    out: path.join(__dirname, 'dist'),
    type: 'cep',
    entry: './src/js/index.ts'
});