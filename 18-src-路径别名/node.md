添加路径别名的方法：
1、找到config/webpack.config.js
2、找到alias
3、添加别名
```shell
    '@': path.join(__dirname,'../src'), 
    'c': path.join(__dirname,'../src/components'),
```