import Vue from 'vue'
import App from './App.vue'
import '@/assets/iconfont/iconfont.css';			//引入fontsize，elemnt-ui中没有的icon
// import store from "store"
import router from './router/router.js'
import axios from 'axios'
// import $ from 'jquery'
// import ElementUi from 'element-ui'
import ElementUi from './element/index'			//引入了element-ui的部分组件
import 'element-ui/lib/theme-chalk/index.css'
import './css/global.css'

// import VueQuillEditor  from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
// 如果想要发送带json格式参数的请求，则需要使用qs模块来处理参数
Vue.config.productionTip = false
Vue.use(ElementUi);
// Vue.use(VueQuillEditor);
Vue.prototype.$axios = axios;
// Vue.prototype.$axios = axios;

//导航钩子守卫
router.beforeEach((to, from, next) => {
	let token = sessionStorage.getItem('userName');
	let path = to.path
	if (path === '/login') {
	    next()
	    return
	}
	if (token) {
	    next();
	} else {
	    // next({
	      // path: '/login'
	    // })
	    next();
	}
})

Vue.config.productionTip = false
new Vue({
  	router,
  	// store,
  	render: h => h(App)
}).$mount('#app')
