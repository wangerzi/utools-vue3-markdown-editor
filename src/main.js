import { createApp } from 'vue'
import App from './App.vue'

import { ElButton, ElRow, ElCol, ElInput, ElDivider } from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App);

app.component(ElButton.name, ElButton)
app.component(ElRow.name, ElRow)
app.component(ElCol.name, ElCol)
app.component(ElInput.name, ElInput)
app.component(ElDivider.name, ElDivider)

app.mount('#app')
