import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueKinesis from "vue-kinesis";


createApp(App).use(store).use(VueKinesis).mount('#app')
