#TS第四课
###步骤：
 1. 初始化： 
  ```npm init -y```
  <br>
 2. 全局安装 typescript : 
 ```npm i typescript -g```
 这样我们可以用  ```tsc```  命令
 <br>
 3. ```tsc --init```   
 创建 tsconfig.json文件
 <br>
 4. 开发环境安装 ```npm i webpack webpack-cli webpack-server -D```
 <br>
 5. webpack.config.js  => 所有配置文件的入口
    webpack.base.config.js => 公共环境的配置
    webpack.dev.config.js => 开发环境的配置
    webpack.pro.config.js => 生产环境的配置
    <br>
 6. _这里为了方便我直接把整个build文件夹拿过来，具体注释在配置文件里面_
 <br>
 7. 那么既然用了ts， 那么就要配置解析ts的loader,然后重新下载typescript，并在公共环境中配置
 ```npm i ts-loader typescript -D```
 <br>
 8. **HtmlWebpackPlugin** 的作用就是帮助我们生成一个模板首页，并且把依赖的文件引入进去（公共环境配置中）
 ```npm i html-webpack-plugin -D```
 <br>
 9. 编写模板文件  **index.html**
 <br>
 10. 生产环境配置中，安装**CleanWebpackPlugin** 作用是每次成功构建之后帮我们清空dist目录，（主要是编译缓存，每次都会存入不同的hash值）
 ```npm i clean-webpack-plugin -D```
  <br>
 11. merge 的作用是把两个配置文件合并 （所有配置文件的入口--**webpack.config.js**）
    ```npm i webpack-merge -D```
     <br>
 12. **现在我们build文件夹基本配置完毕，接下来配置package.json文件**
  <br>
 13. 在package.json 中，先改入口文件```"main"``` 为 ```"./src/index.ts"```
     启动命令 ```"start": "webpack-dev-server --mode=development --config ./build/webpack.config.js"```
     mode 作用： 将我们的环境变量更改为 development
      <br>
 14. ```npm start``` 可以发现项目成功启动
  <br>
 15. 只需要修改 index.ts，将值赋值给HTML容器
  <br>
 16. 可以成功看到页面已经成功渲染，最后配置一个打包的脚本
    ```"build": "webpack --mode=production --config ./build/webpack.config.js"```   
     <br>  
 17. **OK,End ~~~**



 

