<template>
  <Editor :content="state.content" :path="state.path" @save="handleSave" />
</template>

<script setup>
import {reactive} from 'vue';
import Editor from './components/Editor.vue'

const state = reactive({
  content: "",
  path: "",
})

function handleSave(path, content) {
  if (path && content) {
    writeMarkdownFile(path, content)
    utools.showNotification("保存成功");
  }
}

utools.onPluginEnter(({code, type, payload}) => {
  console.log('用户进入插件', code, type, payload)

  if (type === 'files') {
    state.path = payload[0].path;
    state.content = readMarkdownFile(state.path)
  } else {
    state.path = ""
    state.content = ""
  }
})
</script>

<style>
</style>
