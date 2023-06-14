# vuepress-plugin-code-copy

## 使用方法

```bash
npm i @gausszhou/vuepress-plugin-code-copy
# or
yarn i @gausszhou/vuepress-plugin-code-copy
# or
pnpm i @gausszhou/vuepress-plugin-code-copy
```

- config.js

```js
const codeCopy = require("@gausszhou/vuepress-plugin-code-copy");

module.exports = {
  //. omitted
  plugins: [
    //. omitted
    [
      codeCopy,
      {
        copyText: "复制代码",
        tip: { 
          content: "复制成功" 
        }
      }
    ],
  ];
};

```

## Props

| props       | 说明                         | 备注                                     |
| ----------- | ---------------------------- | ---------------------------------------- |
| selector    | 选择器                       | 默认为`div[class*="language-"] pre`      |
| copyText    | 复制代码块显示的文字         | 默认为`Copy code`                        |
| visibleTip  | 是否展示代码复制后默认提示   | 默认为`true`                             |
| tip.title   | 复制成功后的标题             | 默认为`Tips`                             |
| tip.content | 复制成功后的提示内容         | 默认为`copy success`                     |
| tip.time    | 复制成功后提示默认展示的时间 | 默认为`3000`，如果为`Infinity`则是无限制 |
| tip.width   | 复制成功后的提示组件的宽度   | 默认为`400`                              |

## Methods

### change

`change: (text:string, e:HTMLelement) => void`

当复制发生变化时的回调函数， 你可以在此基础上实现一些高级的定制功能(`this`为当前组件)

- `text`是代码块复制的文字或者是失败提示，
- `e`是组件元素本身的属性

## 协议

[MIT](/License)
