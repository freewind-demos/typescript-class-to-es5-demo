TypeScript "class" to ES5 Demo
==============================

在typescript中使用了ES6的特性，比如`class`，如果想转成旧的JavaScript代码，应该怎么做？

需要在`tsconfig.json`中设置`"target": "es5"`，它会就自动转换。如果设为`es6`的话，`class`语法会原样输出。

```
npm install
npx tsc
```
