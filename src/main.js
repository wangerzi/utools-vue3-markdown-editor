import { createApp } from 'vue'
import App from './App.vue'

import { ElButton, ElSelect } from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App);

app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)

app.mount('#app')
