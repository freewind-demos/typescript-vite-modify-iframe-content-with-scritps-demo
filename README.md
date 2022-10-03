TypeScript Vite Modify IFrame Content with Scripts Demo
===========================

以x.innerHTML来修改代码时，里面的`<script>...</script>`不会被执行，需要手动把它们由普通的script标签
变成script对象才行。

参考了这里的答案：https://stackoverflow.com/questions/1197575/can-scripts-be-inserted-with-innerhtml/69190644#69190644

最终选择了 https://stackoverflow.com/a/20584396/342235 而不是 https://stackoverflow.com/a/69190644/342235
是因为后者拿到的script列表的顺序有可能跟解析顺序不同（猜测），可能会导致引入顺序出错的问题（需要验证）

```
npm install
npm run demo
```

It will open page on browser automatically.
