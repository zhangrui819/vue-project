import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/fonts/iconfont.css'
import iView from 'iview/dist/iview.min';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iView);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
