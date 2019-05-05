const path = require('path')
const { createConfig } = require('cep-bundler-webpack')

module.exports = createConfig({
    out: path.join(__dirname, 'dist'),
    type: 'extendscript',
    entry: './src/jsx/index.ts',
    isDev: !!process.env.IS_DEV
});
