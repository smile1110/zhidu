import Vue from 'vue'
import App from './App.vue'
// import store from "store"
import router from './router'
import axios from 'axios'
import $ from 'jquery'
// import ElementUi from 'element-ui'
import ElementUi from './element/index'			//引入了element-ui的部分组件
import 'element-ui/lib/theme-chalk/index.css'

import VueQuillEditor  from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 如果想要发送带json格式参数的请求，则需要使用qs模块来处理参数
Vue.config.productionTip = false
Vue.use(ElementUi);
Vue.use(VueQuillEditor);
Vue.prototype.$axios = axios;
// Vue.prototype.$axios = axios;

new Vue({
  	router,
  	// store,
  	render: h => h(App)
}).$mount('#app')
