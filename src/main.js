// 引入Vue和App
import Vue from 'vue'
import App from './App.vue'
import { Swipe, SwipeItem } from 'vant';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false // 关闭Vue的生产提示

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})