// 引入Vue和App
import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false // 关闭Vue的生产提示

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})