<template>
  <div class="container">
    <el-divider content-position="center" class="divider-content">
      <template v-if="state.path">
        <el-link type="primary" class="file-open" @click="handleOpenFile">{{state.path}}</el-link>
      </template>
      <template v-else>临时文件</template>
    </el-divider>
    <el-row :gutter="30">
      <el-col :span="12">
        <el-input type="textarea" placeholder="markdown..." resize="none" :rows="19" :autofocus="true" v-model="state.content"></el-input>
      </el-col>
      <el-col :span="12">
        <div class="rendered markdown-body" v-html="renderedContent"></div>
      </el-col>
    </el-row>

    <el-row justify="center" :gutter="30">
      <el-col :span="6">
        <el-button class="save-button" @click="handleSave">{{saveText}}</el-button>
      </el-col>
      <el-col :span="6">
        <el-button class="save-button" @click="handleSaveAs">{{saveAsText}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive, watch, computed } from 'vue'
import marked from 'marked'
import "github-markdown-css/github-markdown.css"
import MyRenderer from "./Renderer"

import hljs from 'highlight.js'
import "highlight.js/scss/default.scss"

import keyboard from "keyboardjs"

marked.setOptions({
  renderer: new MyRenderer(),
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

const props = defineProps({
  content: String,
  path: String,
})

const state = reactive({ content: props.content })

watch(() => props.content, () => {
  state.content = props.content
})

watch(() => props.path, () => {
  state.path = props.path

  if (props.path) {
    console.log('basic path', props.path, getFileDirectory(props.path));
    marked.setOptions({
      baseUrl: getFileDirectory(props.path)
    })
  } else {
    console.log("props path is empty");
    marked.setOptions({
      baseUrl: null
    })
  }
}, {
  immediate: true
})

const renderedContent = computed(() => {
  return marked(state.content)
})


// save and save as
const emits = defineEmits(['save'])

const saveText = "保存（ " + (utools.isMacOs() ? "⌘" : 'Ctrl') + " + S ）"
const saveAsText = "另存为（ " + (utools.isMacOs() ? "⌘" : 'Ctrl') + " + Shift + S ）"

function handleSave() {
  if (props.path === "") {
    handleSaveAs()
  } else {
    emits('save', props.path, state.content);
  }
}

function handleSaveAs() {
  const savePath = utools.showSaveDialog({
    title: '保存位置',
    defaultPath: "临时文件.md",
    buttonLabel: '保存'
  })
  if (savePath) {
    emits('save', savePath, state.content);
  }
}

function handleOpenFile() {
  utools.shellShowItemInFolder(state.path);
}

// keyboard
keyboard.bind("mod > s", () => {
  handleSave()
});
keyboard.bind("mod + shift > s", () => {
  handleSaveAs()
});

</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  .divider-content {
    background: transparent;
    color: #fff;
  }
}
.el-row {
  margin-bottom: 20px;
}
.container {
  width: 90%;
  margin: 20px auto;
}
.rendered {
  /*height: calc(100% - 20px);*/

  height: calc(407px - 20px);

  word-break: break-all;

  box-shadow: 0 2px 4px rgba(0,0,0,0.12),0 0 6px rgba(0,0,0,0.04);

  border: 2px solid #eee;
  padding: 10px 20px;
  background: #fff;

  overflow-y: auto;
}

.save-button {
  margin: 0 auto;
  display: block;
}
</style>
