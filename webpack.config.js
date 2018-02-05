const path = require('path');

module.exports = {
    entry: './scripts/factory.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};