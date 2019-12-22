<template>
	<div class="yw-main-body">
		<!-- 左侧 -->
		<div class="yw-aside-left">
			<div class="part-box">
				<!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1"><router-link to="/ywindex/ywlatest_list">最新</router-link></el-menu-item>
					<el-menu-item index="2"><router-link to="/ywindex">推荐</router-link></el-menu-item>
					<el-menu-item index="3"><router-link to="/ywindex">悬赏红包</router-link></el-menu-item>
					<el-menu-item index="4"><router-link to="/ywindex">专场</router-link></el-menu-item>
				</el-menu> -->
				<el-tabs v-model="activeIndex" @tab-click="handleClick">
				    <el-tab-pane label="最新" name="1"></el-tab-pane>
				    <el-tab-pane label="推荐" name="2"></el-tab-pane>
				    <!-- <el-tab-pane label="悬赏红包" name="3"></i></el-tab-pane> -->
				    <!-- <el-tab-pane label="专场" name="4"></el-tab-pane> -->
				</el-tabs>
				<div class="scroll-list">
					<!-- 最新的tab -->
					<newest  v-show="activeIndex == 1"></newest>
					<!-- 推荐的tab -->
					<recommend v-show="activeIndex == 2"></recommend>
					<!-- 红包的tab -->
					<red-packet v-show="activeIndex == 3"></red-packet>
					<!-- 专场的tab -->
					<special-field v-show="activeIndex == 4"></special-field>
				</div>
			</div>
		</div>
		<!-- 右侧 -->
		<div class="yw-aside-right">
			<!-- 选上红包 -->
			<div class="card-hot-box">
				<div class="hot-box-t">
					<img src="../../images/head.jpg">
					<div>
						<h3>悬赏红包</h3>
						<p class="text2">回答问题，一起领红包</p>
					</div>
					<span style="flex-grow:1"></span>
					<a href="javascript:void(0);" class="btn-default-text pb10" @click="checkMore('3')">更多&gt;</a>
				</div>
				<div class="hot-box-m">
					<h3>如果让你来策划鼠年的金钞营销活动，你会怎么策划？</h3>
					<div class="text-con">
						<p class="text-m">最佳回答即可领红包</p>
						<p class="text-m">5人回答</p>
					</div>
					<a href="" class="money">￥38</a>
				</div>
				<div class="hot-box-b">换一个</div>
			</div>
			<!-- 热门问答 -->
			<div class="card-hot-box box-shadow">
				<h3 class="hot-title"><i class="icon el-icon-remen"></i>热门问答</h3>
				<ul class="hot-artical-ul">
					<li class="hot-artical-li">
						<p class="hot-li-title">你见过哪些迷信互联网的歪理邪说和案例？</p>
						<!-- <p class="hot-info"><span class="s1">你好先生</span><span class="s1">2019-09-20</span></p> -->
					</li>
					<li class="hot-artical-li">
						<p class="hot-li-title">你见过哪些迷信互联网的歪理邪说和案例？</p>
						<!-- <p class="hot-info"><span class="s1">你好先生</span><span class="s1">2019-09-20</span></p> -->
					</li>
					<li class="hot-artical-li">
						<p class="hot-li-title">你见过哪些迷信互联网的歪理邪说和案例？</p>
						<!-- <p class="hot-info"><span class="s1">你好先生</span><span class="s1">2019-09-20</span></p> -->
					</li>
				</ul>
			</div>
			<!-- 热门用户 -->
			<div class="card-hot-box box-shadow">
				<h3 class="hot-title"><i class="icon el-icon-remen"></i>热门用户</h3>
				<ul class="hot-artical-ul">
					<li class="hot-artical-li clearfix">
						<img class="head-icon fl" src="../../images/head.jpg">
						<div class="user-info fl">
							<div class="name-box">
								<p>旺仔0898</p>
								<p class="name-num">+17</p>
							</div>
							<div class="name-desp">甄选生活，为我们的生活锦上添花！</div>
						</div>
					</li>
					<li class="hot-artical-li clearfix">
						<img class="head-icon fl" src="../../images/head.jpg">
						<div class="user-info fl">
							<div class="name-box">
								<p>旺仔0898</p>
								<p class="name-num">+12</p>
							</div>
							<div class="name-desp"></div>
						</div>
					</li>
					<li class="hot-artical-li clearfix">
						<img class="head-icon fl" src="../../images/head.jpg">
						<div class="user-info fl">
							<div class="name-box">
								<p>旺仔0898</p>
								<p class="name-num">+17</p>
							</div>
							<div class="name-desp">甄选生活，为我们的生活锦上添花！</div>
						</div>
					</li>
					<li class="hot-artical-li clearfix">
						<img class="head-icon fl" src="../../images/head.jpg">
						<div class="user-info fl">
							<div class="name-box">
								<p>旺仔0898</p>
								<p class="name-num">+17</p>
							</div>
							<div class="name-desp">甄选生活，为我们的生活锦上添花！</div>
						</div>
					</li>
				</ul>
			</div>
			<!-- 邀请加入qq群 -->
			<div class="card-hot-box box-shadow pt30" id="qqgroup" :class="showClass?'fixright':''">
				<div class="invite-info">
					<div class="invite">
						<div class="invite-item">
							<img src="../../images/head.jpg">
							<p>干货文章</p>
							<p>优质课程</p>
						</div>
						<div class="invite-item">
							<img src="../../images/head.jpg">
							<p>干货文章</p>
							<p>优质课程</p>
						</div>
						<div class="invite-item">
							<img src="../../images/head.jpg">
							<p>干货文章</p>
							<p>优质课程</p>
						</div>
					</div>
					<!-- 扫码 -->
					<div class="scan-code">
						<img class="code" src="../../images/head.jpg">
						<p class="code-desc">扫码即可下载app</p>
					</div>
				</div>
				<!-- 加群 -->
				<div class="group-box">
					<div class="group-info">加入官方Q群，与更多互联网人一起讨论，共同成长</div>
					<div><span class="group-num">QQ群：3838383</span><span class="yw-button" style="width:100px;">一键加群</span></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import newest from "./components/newest.vue";
	import recommend from "./components/recommend.vue";
	import redPacket from "./components/red_packet.vue";
	import specialField from "./components/special_field.vue";
	import $ from 'jquery';

    export default{
        name:"",
        data:function(){
            return {
            	activeIndex:'1',
            	scroll,
            	divTop:2,
            	showClass:false			//当滚动条滚动的高度大于navbar高度的时候，固定
            }
        },
        components:{
	        newest,
	        recommend,
	        redPacket,
	        specialField
	    },
        methods:{
        	handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleClick(tab, event) {
		        console.log(tab, event);
		    },
		    toDetail:function(){
		    	// 到时会区分，前三个是一个详情，后面的一个是单独的详情
		    	this.$router.push({path:'/ywdetail'})
		    },
		    checkMore:function(num){		//右侧的红包查看更多
		    	this.activeIndex = num;
		    },
		    handleScroll: function () {
	            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;  
	            // 设备/屏幕高度
	            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	            // console.log( "滚动的高度："+ scrollTop);
	            if( scrollTop+60 > this.divTop ){
	            	this.showClass = true;
	            }else{
	            	this.showClass = false;
	            }
	        }
        },
        watch:{
        	activeIndex:{
        		handler:function(newval,oldval){
        			console.log(newval)
        		}
        	}
        },
        mounted() {
        	var divTop = $("#qqgroup").offset().top;
        	this.divTop = divTop;
	      	window.addEventListener('scroll', this.handleScroll,true)
	    },
    }
</script>
<style type="text/css">
	.yw-main-body{display: flex;width:1000px;margin:0 auto;justify-content: space-between;
    	margin-top: 20px;}
	.yw-main-body .yw-aside-left{width:680px;}
	.yw-main-body .yw-aside-left .part-box{background:#fff;}
	.yw-main-body .yw-aside-left .el-tabs__nav-wrap::after{height:1px;}
	.yw-main-body .main-list{}
	.yw-aside-right{width:300px;}
	.list-box .list-item{padding:30px;display: flex;border-top: 1px solid #f2f2f2;}
	.list-box .list-item:hover{background-color: #F7F7F7;}
	.list-box .list-item:first-child{border-top:none;}
	.list-box .list-item .item-head-box{text-align: left;width:100%;}
	.list-box .list-item .icon{font-size:16px;vertical-align: top;margin-right:2px;}
	.list-box .list-item .item-head{margin-right:22px;}
	.list-box .list-item .item-head img{width:40px;height:40px;border-radius: 30px;}
	.list-box .head-box-type{line-height: 20px;}
	.list-box .head-box-type span.ident{width: 60px;height: 20px;background: rgba(255,85,0,1);border-radius: 4px;color: white;font-size: 12px;display: inline-block;text-align: center;line-height: 20px;margin-right:8px;}
	.list-box .head-box-text{font-size:16px;line-height: 20px;}
	.list-box .other-head{display:inline-block;width:20px;height:20px;border-radius: 60px;margin-right: 4px;}
	.list-box .others-list{margin-top:16px;}
	.list-box .others-list .right-text{font-size:0;}
	.list-box .others-list .right-text .icon{font-size: 16px;margin-right: 4px;vertical-align: top;margin-top: 2px;}
	.list-box .others-list .icon.el-icon-more{color: #999;border-radius: 50%;border: 1px solid #999;padding: 1px;vertical-align: top;display: inline-block;margin-right:4px;}
	.list-box .others-list .others-list-text{font-size:12px;color:#999;vertical-align: top;line-height: 22px;}
	.list-box .others-list .others-list-text:first-child:after{content:"|";font-size:12px;color:#999;vertical-align: top;display: inline-block;margin:0 5px;}
	/*tab*/
	.yw-main-body .yw-aside-left .el-tabs{height:70px;line-height: 70px;}
	.yw-main-body .yw-aside-left .el-tabs .el-tabs__item{font-size:18px;color:#333;}
	.yw-main-body .yw-aside-left .el-tabs .el-tabs__nav-scroll{padding-left:30px;}
	.yw-main-body .yw-aside-left .el-tabs .el-tabs__item.is-active{font-weight: bold;}
	.yw-main-body .yw-aside-left .el-tabs .el-tabs__active-bar{background-color: #f56040;}
	/*右侧-热门推荐*/
	.card-hot-box{margin-bottom: 20px;box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.1);border-radius: 4px;background:#fff;}
	.card-hot-box.fixright{position: fixed;top:80px;width:300px;left:50%;margin-left:200px;z-index:2;}		/*滚动到底部则固定*/
	.card-hot-box .hot-box-t{display: flex;padding:29px 25px;box-sizing:border-box;border-bottom: 1px solid #E6E6E6;}
	.card-hot-box .hot-box-t img{width:40px;height:40px;margin-right:10px;}
	.card-hot-box .hot-box-t h3{text-align: left;margin-bottom:6px;}
	.card-hot-box .hot-box-t .text2{font-size:14px;color:#999;}
	.card-hot-box .hot-box-m{padding: 29px 25px 21px;border-bottom: 1px solid #E6E6E6;}
	.card-hot-box .hot-box-m h3{margin-bottom:9px;font-size:14px;line-height:25px;padding-bottom:9px;}
	.card-hot-box .hot-box-m .text-con{display: flex;justify-content: space-between;}
	.card-hot-box .hot-box-m .text-m{font-size: 14px;color: #999;line-height: 25px;}
	.card-hot-box .hot-box-m .money{width: 252px;height: 40px;background: #ffeee5;border-radius: 4px;line-height: 40px;text-align: center;font-size: 16px;color: #FF5500;cursor: pointer;font-weight: bold;margin-top:15px;}
	.card-hot-box .hot-box-b{    height: 50px;line-height: 50px;text-align: center;font-size: 16px;color: #406080;cursor: pointer;moz-user-select: -moz-none;-moz-user-select: none;-o-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none;}
	/*右侧的热门推荐list*/
	.card-hot-box .hot-title{height:60px;line-height:60px;font-size:18px;color:#333;font-weight:bold;border-bottom:1px solid #EBEEF5;padding-left:24px;}
	.card-hot-box .hot-title i{font-size: 24px;margin-right: 4px;vertical-align: top;margin-top: 17px;}
	.card-hot-box .hot-artical-ul{}
	.card-hot-box .hot-artical-ul .hot-artical-li{padding:18px 24px;border-bottom:1px solid #EBEEF5;cursor: pointer;}
	.card-hot-box .hot-artical-ul .hot-artical-li .hot-li-title{font-size:14px;line-height:24px;cursor: pointer;color:#333;}
	.card-hot-box .hot-artical-ul .hot-artical-li .hot-li-title:hover{color:#f56040;}
	.card-hot-box .hot-artical-ul .hot-artical-li .hot-info{margin-top:20px;}
	.card-hot-box .hot-artical-ul .hot-artical-li .hot-info .s1{font-size:12px;color:#999;display: inline-block;margin-right:12px;}
	.card-hot-box .hot-artical-ul .hot-artical-li:hover{background: #f7f7f7;}
	/*右侧的热门用户*/
	.card-hot-box .hot-artical-ul .hot-artical-li .head-icon{width:40px;height:40px;border-radius: 50%;margin-right:12px;}
	.card-hot-box .hot-artical-ul .hot-artical-li .user-info{width:200px;}
	.card-hot-box .hot-artical-ul .hot-artical-li .user-info .name-box{font-size:14px;line-height:24px;color:#333;font-weight: bold;position: relative;}
	.card-hot-box .hot-artical-ul .hot-artical-li .user-info .name-num{position: absolute;right:0;top:0;width:30px;text-align: right;color:#f56040;font-weight: normal;}
	.card-hot-box .hot-artical-ul .hot-artical-li .user-info .name-desp{font-size:12px;color:#999;}
	/*邀请加入qq部分*/
	.card-hot-box .invite-info{border-bottom: 1px solid #EBEEF5;}
	.card-hot-box .invite-info .invite{display: flex;justify-content:space-between;padding:0 30px;}
	.card-hot-box .invite-info .invite .invite-item{align-items:flex-start;flex-wrap:nowrap;}
	.card-hot-box .invite-info .invite .invite-item img{display: inline-block;border-radius: 50%;width:60px;height:60px;margin-bottom:8px;}
	.card-hot-box .invite-info .invite .invite-item p{color:#999;font-size:12px;line-height:18px;text-align: center;}
	.card-hot-box .invite-info .scan-code{padding:30px 0;}
	.card-hot-box .scan-code .code{display: block;width:120px;height:120px;margin:0 auto;}
	.card-hot-box .scan-code .code-desc{font-size:14px;margin-top:8px;text-align: center;}
	.card-hot-box .group-box{padding:30px;}
	.card-hot-box .group-box .group-info{font-size:14px;line-height:24px;}
	.card-hot-box .group-box .group-num{font-size:14px;color:#333;margin-right:12px;}
	/*热门专场*/
	.yw-main-body .yw-aside-left .hot-field{background:#f7f7f7;padding:0 30px 30px;}
	.yw-main-body .yw-aside-left .hot-field .hot-title{line-height: 60px;font-size:16px;}
	.yw-main-body .yw-aside-left .hot-field .hot-title .hot{font-weight: bold;}
	.yw-main-body .yw-aside-left .hot-field .hot-title i.icon{font-size:20px;margin-right: 5px;vertical-align: top;margin-top: 22px;}
	.yw-main-body .yw-aside-left .hot-field .hot-title .more{font-size:14px;line-height: 60px;}
	.yw-main-body .yw-aside-left .hot-field .hot-title .more:hover{color:#f56040;}
	.hot-field .hot-person li{float:left;text-align: left;width:300px;margin-right:20px;}
	.hot-field .hot-person li:nth-of-type(2){margin-right:0;}
	.hot-field .hot-person li .hot-t{background:-webkit-linear-gradient(to right #fa8330, #f56040);width:100%;height:182px;border-radius: 4px;}
	.hot-field .hot-person li .hot-t{background: linear-gradient(to right, #fa8330,#f56040);width:100%;height:182px;border-radius: 4px;padding:20px;box-sizing:border-box;}
	.hot-field .hot-person li:nth-of-type(2) .hot-t{background:-webkit-linear-gradient(to right #40f5a6, #1eafa0);width:100%;height:182px;border-radius: 4px;}
	.hot-field .hot-person li:nth-of-type(2) .hot-t{background:linear-gradient(to right #40f5a6, #1eafa0);width:100%;height:182px;border-radius: 4px;}
	.hot-field .hot-person .hot-img{width:166px;color:#fff;}
	.hot-field .hot-person .hot-img .s1{font-size:20px;line-height:32px;margin-top:30px;}
	.hot-field .hot-person .hot-img .s2{font-size:12px;}
	.hot-field .hot-person .hot-head{width:90px;height:90px;border-radius: 50%;margin-top:20px;}
	.hot-field .hot-person .hot-b .p1{font-size:16px;line-height:24px;margin-top:8px;}
	.hot-field .hot-person .hot-b .p2{font-size:12px;color:#999;margin-top:8px;}
	.hot-field .hot-person .hot-b .p2 span:after{content:"|";display: inline-block;margin:0 8px;}
	.hot-field .hot-person .hot-b .p2 span:last-child:after{content:"";}
	
</style>