const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
        //作用：每次成功构建之后帮我们清空dist目录
    ]
}




