<template>
    <div id="app">
        <div class="nav-bar-box">
            <div class="nav-bar clearfix">
                <div class="nav-logo fl">
                    <img src="./images/logo.png">
                </div>
                <div class="fl nav-bar-list">
                    <el-menu :default-active="activeNav" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">智读</el-menu-item>
                        <el-menu-item index="3">AI学</el-menu-item>
                        <el-menu-item index="4"><router-link to="/ywindex">夜问</router-link></el-menu-item>
                        <el-menu-item index="5">田野</el-menu-item>
                        <el-menu-item index="6">紫竹</el-menu-item>
                        <el-menu-item index="7">流氓村</el-menu-item>
                    </el-menu>
                </div>
                <!-- 中间的部分 -->
                <div class="fr right-content">
                    <div class="content-item"><i class="icon el-icon-circle-plus-outline"></i><span>提问</span></div>
                    <div class="content-item"><i class="icon el-icon-search"></i><span>搜索</span></div>
                    <div class="content-item"><i class="icon el-icon-mobile"></i><span>APP</span></div>
                    <div class="content-item"><i class="icon el-icon-bell"></i><span></span></div>
                    <!-- 头像 -->
                    <!-- <ul>
                        <li><router-link to="/my/artical"><i class="icon"></i>我的文章</router-link></li>
                        <li><router-link to="/my/collect"><i class="icon"></i>我的收藏</router-link></li>
                    </ul> -->
                    <div class="content-item">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <img class="avatar" src="./images/head.jpg">
                                <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <!-- <el-dropdown-item>silence</el-dropdown-item> -->
                                <!-- <el-dropdown-item divided><router-link @click.native="checkMy" to="/my/artical">我的文章</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link @click.native="checkMy" to="/my/collect">我的收藏</router-link></el-dropdown-item> -->
                                <el-dropdown-item><router-link to="/mycenter/myquestion">我的主页</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/mycenter/myquestion">个人设置</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/mycenter/myquestion">帮助中心</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/mycenter/myquestion">意见反馈</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/mycenter/myquestion">退出登录</router-link></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <!-- 中间内容 -->
        <div class="main-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import "./css/global.css";
export default {
    name: 'App',
    data:function(){
      return {
        activeNav:"4"
      }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        checkMy:function(){
            console.log(111);
            this.activeNav = '-1';
        }
    }
}
</script>
<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    body,html{background:#f9fafd;margin:0;padding:0;}
    ul,ul li{list-style: none;margin:0;padding:0;}
    .nav-bar-box{width:100%;position:fixed;top:0;height: 60px;background:#fff;z-index:1000;}
    .nav-bar{max-width: 1200px;margin:0 auto;}
    .nav-bar-box .nav-logo{margin-right:50px;}
    .nav-bar .nav-bar-list .el-menu-demo:after{clear:inherit;}
    .nav-bar .nav-bar-list li{float:left;cursor: pointer;}
    .nav-bar .nav-bar-list li.el-menu-item{font-size:14px!important;color:#333;}
    .nav-bar .nav-bar-list li.el-menu-item:hover,.nav-bar .nav-bar-list li.el-menu-item.is-active{color:#f56040;}
    .nav-bar-box .el-menu--horizontal>.el-menu-item.is-active{border-bottom:2px solid red;color:#f56040;}
    /*.el-dropdown-menu{padding:0;}*/
    /*.el-dropdown-menu .el-dropdown-menu__item{line-height: 38px;margin:0;}*/
    .el-dropdown-menu__item:focus, .el-dropdown-menu__item:hover {color: #f56040!important;background:none!important;}
    .el-dropdown-menu__item:focus, .el-dropdown-menu__item:hover a{color: #f56040!important;}
    .nav-bar-box .right-content .content-item{display: inline-block;margin-right:24px;line-height: 60px;cursor: pointer;}
    .nav-bar-box .right-content .content-item:hover{color:#f56040;}
    .nav-bar-box .right-content .content-item .icon{font-size:20px;margin-right:4px;vertical-align: middle;}
    .nav-bar-box .right-content .content-item .avatar{width:30px;height:30px;vertical-align: top;margin-top: 12px;}
    .main-box{margin-top:80px;}
</style>
