// 引入Vue和App
import Vue from "vue";
import App from "./App.vue";
import {Swipe, SwipeItem} from "vant";
import VueAwesomeSwiper from "vue-awesome-swiper";
import {Input, Button} from "element-ui";
import "swiper/css/swiper.css";
import "./style/style-theme/theme/index.css";

Vue.use(VueAwesomeSwiper);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Input);
Vue.use(Button);

Vue.config.productionTip = false; // 关闭Vue的生产提示

// 创建vm
new Vue({
  el: "#app",
  render: (h) => h(App),
});
