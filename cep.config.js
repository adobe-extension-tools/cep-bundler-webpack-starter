const path = require('path')
const { createConfig } = require('cep-bundler-webpack')

const config = createConfig({
    devHost: '0.0.0.0', 
    out: path.join(__dirname, 'dist'),
    type: 'cep',
    entry: './src/js/index.ts',
    isDev: !!process.env.IS_DEV
});

module.exports = config