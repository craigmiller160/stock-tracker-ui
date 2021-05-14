
module.exports = {
    title: 'Stock Tracker',
    devServerPort: 3000,
    devServerHttps: true,
    publicPath: '/stock-tracker',
    devServerProxy: {
        '/stock-tracker/api': {
            target: 'https://localhost:8080',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/stock-tracker/api': ''
            },
            logLevel: 'debug'
        }
    }
};