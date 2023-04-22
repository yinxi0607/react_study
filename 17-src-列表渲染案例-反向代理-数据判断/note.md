配置反向代理  
1、使用  
```shell
npm run eject
```  
2、提取出config文件夹  
3、在文件夹中找到webpackDevServer.config.js
4、修改proxy
```js
proxy: {
      '/ajax':{
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }
    }
```