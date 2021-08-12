# utools-vue3-markdown-editor
基于 vue3 + vite + elementui + markd + keyboardjs + highlight.js 实现的清爽 Markdown 编辑器

Github: [https://github.com/wangerzi/utools-vue3-markdown-editor](https://github.com/wangerzi/utools-vue3-markdown-editor)
Gitee: [https://gitee.com/wangerzi/utools-vue3-markdown-editor](https://gitee.com/wangerzi/utools-vue3-markdown-editor)

![screen](./screen.gif)

## 功能

- 支持复制文件触发编辑
- 支持 `Ctrl/Command + S` 即时保存，`Ctrl/Command + Shift + S` 另存为
- 支持代码高亮，即时渲染 Github 样式的预览

## 进阶需求

- 支持相对路径图片显示
- 图床支持

## 如何部署

```shell
$ npm i
$ npm build
$ npm run dev # 运行测试环境
```

将 `dist/plugin.json` 拖动到 Utools 开发者工具，即可进行调试和打包

## 开源协议

utools-vue3-markdown-editor is licensed under the MIT License. See [LICENSE](https://github.com/GitbookIO/gitbook/blob/master/LICENSE) for the full license text.