import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 我的个人中心页面
import myindex from '../views/my/index.vue'
import myartical from '../views/my/myartical/articalList.vue'		//文章
import mycollect from '../views/my/collect/collect.vue'		//收藏
import richtext from '../views/my/myartical/richtext.vue'   //文章编辑->富文本编辑
// 导航->夜问模块
import ywindex from '../views/yewen/index.vue'      //夜问页面
import ywdetail from '../views/yewen/yw_detail.vue'      //夜问(最新、推荐、红包)详情页面
import yw_sp_detail from '../views/yewen/yw_special_detail.vue'      //夜问专场详情页面

Vue.use(Router)

export default new Router({
  mode:'history',             //本地浏览的url链接，有个#，目的是把#号去掉
  routes: [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
    	path:'/my',
    	name:'my',
    	component:myindex,
    	children:[
          	{
                path:'artical',
                name:'artical',
                component:myartical,
                children:[]
            },
            {
                path:'collect',
                name:'collect',
                component:mycollect
            }
    	]
    },
    {
        path:'richtext',
        name:'richtext',
        component:richtext
    },
    {
        path:'/ywindex',     //夜问模块
        name:'ywindex',
        component:ywindex,
        children:[
          
          // {
          //   path:'yw_sp_detail',
          //   name:'yw_sp_detail',
          //   component:yw_sp_detail,
          // },
        ]
    },
    {
        path:'/ywdetail',
        name:'ywdetail',
        component:ywdetail,
    },
  ]
})
