# utools-vue3-markdown-editor
基于 vue3 + vite + elementui + markd + keyboardjs + highlight.js 实现的清爽 Markdown 编辑器

Github: [https://github.com/wangerzi/utools-vue3-markdown-editor](https://github.com/wangerzi/utools-vue3-markdown-editor)
Gitee: [https://gitee.com/wangerzi/utools-vue3-markdown-editor](https://gitee.com/wangerzi/utools-vue3-markdown-editor)

本插件编写过程已发表博客：[使用 Vue3 + vite + elementUI 开发一个 Utools Markdown 编辑器插件](https://blog.csdn.net/qq_34177812/article/details/119639897)

![screen](./screen.gif)

## 功能

- 支持复制文件触发编辑
- 支持 `Ctrl/Command + S` 即时保存，`Ctrl/Command + Shift + S` 另存为
- 支持代码高亮，即时渲染 Github 样式的预览
- 支持相对路径图片显示
- 打开文件所在路径

## 进阶需求

- 适配暗黑模式 
- 分离窗口最大化后，编辑框和预览框的高度固定不能自定义 
- 希望支持TOC标题预览
- 希望支持切换视图（编辑、预览、边编辑边预览）
- 修改文件名
- 图床支持
- 文件外部变化后，自动载入
- 导出图片
- 导出 PDF
- 导出 HTML

## 如何部署

```shell
$ npm i
$ npm build
$ npm run dev # 运行测试环境
```

将 `dist/plugin.json` 拖动到 Utools 开发者工具，即可进行调试和打包

## 开源协议

utools-vue3-markdown-editor is licensed under the MIT License. See [LICENSE](https://github.com/GitbookIO/gitbook/blob/master/LICENSE) for the full license text.
