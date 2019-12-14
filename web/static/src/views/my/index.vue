<template>
    <div>
        <div class="container">
            <div class="head-box clearfix">
                <!-- 左侧的头像区域 -->
                <div class="head-header fl">
                    <img src="../../images/head.jpg" class="header">
                    <div class="head-info">
                        <p class="head-nike">silence</p>
                        <p class="head-home">我的主页</p>
                    </div>
                </div>
                <!-- 右侧的数据区域 -->
                <div class="fr">
                    <div class="circle-data"><p class="read-num">2人</p><p class="read-type">文章</p></div>
                    <div class="circle-data"><p class="read-num">2人</p><p class="read-type">阅读</p></div>
                    <div class="circle-data"><p class="read-num">2人</p><p class="read-type">阅读量</p></div>
                    <div class="circle-data"><p class="read-num">0元</p><p class="read-type">收益</p></div>
                </div>
            </div>
        </div>
        <!-- 中间的内容 -->
        <div class="wb-main clearfix">
            <div class="main-left fl">
                <ul>
                    <li><router-link to="/my/artical"><i class="el-icon-document icon"></i>我的文章</router-link></li>
                    <li><router-link to="/my/collect"><i class="el-icon-star-on icon"></i></i>我的收藏</router-link></li>
                </ul>
            </div>
            <div class="main-right fr">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"",
        data:function(){
            return {

            }
        },
        methods:{

        }
    }
</script>
<style type="text/css">
.container{width:100%;background:#ededed;padding:50px 0;}
.container .head-box{margin:0 auto;width:1200px;height:132px;}
.container .head-box .head-header{}
.container .head-box .head-header img{display: inline-block;width:124px;height:124px;border-radius: 200px;border:2px solid #fff;}
.container .head-box .head-header .head-info{display: inline-block;margin-left:20px;vertical-align: top;}
.container .head-box .head-header .head-nike{font-size:24px;line-height:30px;margin:32px 0 0;color:#fff;}
.container .head-box .head-header .head-home{font-size:14px;padding:4px 0;border:1px solid #f56040;text-align:center;}
.container .head-box .circle-data{display: inline-block;width:102px;height:102px;margin-left:28px;background: url("../../images/red.png")}
.container .head-box .circle-data .read-num,.container .head-box .circle-data .read-type{text-align: center;font-size:16px;color:#fff;}
.container .head-box .circle-data .read-num{margin-top:28px;}
.container .head-box .circle-data .read-type{font-size:14px;}
.wb-main{width:1200px;margin:28px auto 0;}
.wb-main .main-left{width:234px;background:#fff;min-height:500px;margin-right:30px;}
.wb-main .main-right{width:936px;background:#fff;min-height:500px;padding:0 18px;box-sizing: border-box;}
.wb-main .main-left ul li{font-size:16px;cursor: pointer;text-align: left;}
.wb-main .main-left ul li a{display: inline-block;width: 100%;box-sizing: border-box;height:100%;padding:18px;}
.wb-main .main-left ul li i.icon{font-size:18px;margin-right:8px;}
.wb-main .main-left ul li a.router-link-active{color:#f56040;border-left: 1px solid #f04622;background:#fbe7e2;}
.wb-main .main-right .main-nav .el-menu-item{font-size:16px;}
.wb-main .main-right .main-nav .add-art{color:#f56040;padding:20px 0 0 0;font-size:16px;cursor:pointer;}
/*列表*/
.wb-main .main-right .main-nav .main-empty-tips .art-tips{font-size: 12px;color: red;padding-top: 12px;text-align: left;}
.wb-main .main-right .main-nav .art-empty-list{text-align: center;font-size:18px;padding:20px 0;}
.main-right .main-nav li.is-active{border-bottom: 2px solid #f56040;}
/*文章列表*/
.art-list-box {padding-bottom:60px;}
.art-list-box .list-item{border-bottom:1px dotted #EBEEF5;padding:12px 0 10px;font-size:14px;color:#333;}
.art-list-box .list-item .el-icon-time{margin-right:4px;}
.art-list-box .list-item .el-icon-delete{cursor: pointer;color:red;margin-left:8px;}
.art-list-box .list-item .time-box{}
</style>