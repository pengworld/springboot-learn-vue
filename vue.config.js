const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        //设置开发接口代理
        proxy: {
            "/": {
                target: 'http://localhost:8081',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                },
            }
        }
    },

})
