import Vue from 'vue'
import Antd from 'ant-design-vue';

import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Common from './common/common'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueClipboard)
Vue.prototype.Common=Common;

new Vue({
  render: h => h(App),
}).$mount('#app')
