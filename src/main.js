import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载vant核心组件
import Vant from 'vant'
// 加载vant 全局样式
import 'vant/lib/index.css'
// 全局样式表
import '@/styles/index.less'
// const app = createApp();
// 注册使用vant
Vue.use(Vant);




Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')