import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 我的个人中心页面
// import myindex from '../views/my/index.vue'
// import myartical from '../views/my/myartical/articalList.vue'		//文章
// import mycollect from '../views/my/collect/collect.vue'		//收藏
// import richtext from '../views/my/myartical/richtext.vue'   //文章编辑->富文本编辑
// 个人中心页面
import mycenter from '../views/personal_center/index.vue'                       //我的个人中心index页面
import myquestion from '../views/personal_center/my_question/question.vue'      //我的提问
import my_answer from '../views/personal_center/my_answer/answer.vue'           //我的回答
import concerns from '../views/personal_center/concerns/concerns_q.vue'           //关注的问题
import myfans from '../views/personal_center/my_fans/fans.vue'                  //我的粉丝
import myconcern from '../views/personal_center/my_concern/concern.vue'         //我的关注
import myartical from '../views/personal_center/my_artical/artical.vue'         //我的文章
import mysetup from '../views/personal_center/set_up/setup.vue'                 //设置
import myvalue_record from '../views/personal_center/value_record/value_record.vue'       //经验值记录
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
        path:'/mycenter',
        name:'mycenter',
        component:mycenter,
        children:[
            {
                path:'myquestion',
                name:'myquestion',
                component:myquestion,
            },
            {
                path:'my_answer',
                name:'my_answer',
                component:my_answer,
            },
            {
                path:'concerns',
                name:'concerns',
                component:concerns,
            },
            {
                path:'myfans',
                name:'myfans',
                component:myfans,
            },
            {
                path:'myconcern',
                name:'myconcern',
                component:myconcern,
            },
            {
                path:'myartical',
                name:'myartical',
                component:myquestion,
            },
            {
                path:'mysetup',
                name:'mysetup',
                component:myquestion,
            },
            {
                path:'myvalue_record',
                name:'myvalue_record',
                component:myvalue_record,
            },
        ]
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
