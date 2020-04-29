const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.ts',//入口文件
    output:{
        filename: 'app.js' //输出
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']//拓展名
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,//ts-loader的正则
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
                //这里是要排除一下node_modules里面的文件
            }
        ]
    },
    plugins: [
        // HtmlWebpackPlugin 的作用是 通过一个模板帮助我们生成一个首页，并且把依赖的文件嵌入到这个首页中
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}


