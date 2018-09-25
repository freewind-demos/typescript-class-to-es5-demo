TypeScript ES6 to ES5 Demo
==========================

在typescript中使用了ES6的特性，比如`class/async/await`，如果想转成旧的JavaScript代码，应该怎么做？

需要在`tsconfig.json`中设置`"target": "es5"`，语法会自动转换。但是有一些库，比如`promise`等，还需要安装额外的库。


```
npm install
npx tsc
```
