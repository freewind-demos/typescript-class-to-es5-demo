```
$ npx tsc
```

将生成`hello.js`，内容如下：

```
"use strict";
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.hello = function (name) {
        console.log("Hello, " + name + "!");
    };
    return Hello;
}());
var hello = new Hello();
['typescript', 'class'].map(function (item) { return item + "!"; }).forEach(function (item) {
    return hello.hello(item);
});
//# sourceMappingURL=hello.js.map
```

可以看到`class`已经被转换为普通的`function`了。
