<!-- 专场列表 -->
<template>
	<div>
		<div class="main-list">
			<!-- 专场的列表 -->
			<ul class="card-list-box">
				<li class="list-item" @click="toDetail">
					<a href="#" class="item-head file-img"><img src="../../../images/head.jpg"/></a>
					<div class="item-head-box">
						<div class="p-desc">起点学院金牌导师解答 1v1，我是腾讯高级数据分析师@凌霄，欢迎大家向我提问</div>
						<div class="clearfix others-desc">
							<p class="fl yw-remind">
								<span class="sp1">提问：0</span>
								<span class="sp1">回答：2</span>
							</p>
							<p class="fr right-text">
								<i class="icon el-icon-magic-stick"></i>
								<span class="s2">火热进行中</span>
							</p>
						</div>
					</div>
				</li>
				<li class="list-item" @click="toDetail">
					<a href="#" class="item-head file-img"><img src="../../../images/head.jpg"/></a>
					<div class="item-head-box">
						<div class="p-desc">起点学院金牌导师解答 1v1，我是腾讯高级数据分析师@凌霄，欢迎大家向我提问</div>
						<div class="clearfix others-desc">
							<p class="fl yw-remind">
								<span class="sp1">提问：0</span>
								<span class="sp1">回答：2</span>
							</p>
							<p class="fr right-text">
								<i class="icon el-icon-magic-stick"></i>
								<span class="s2">火热进行中</span>
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    name: '',
	    data:function(){
	      return {
	        
	      }
	    },
	    methods:{
	        toDetail:function(){
		    	// 到时会区分，前三个是一个详情，后面的一个是单独的详情
		    	this.$router.push({path:'/ywdetail'})
		    }
	    }
	}
</script>
<style type="text/css">
	.right-text{color:#f56040;font-size:14px;}
	/*.card-list-box{padding:30px 0;}*/
	.card-list-box li{padding:30px 0;border-bottom:1px solid #EBEEF5;}
	.card-list-box li .others-desc{padding:0 30px;}
	.card-list-box .file-img{height:190px;border-radius: 6px;border:1px solid #EBEEF5;margin:0 30px;box-sizing:border-box;}
	.card-list-box .file-img img{width:100%;height:100%;}
	.card-list-box .others-desc{padding:0 30px;}
	.card-list-box .p-desc{font-size: 16px;color:#333;line-height:24px;margin-top:18px;margin-bottom:10px;padding:0 30px;}
</style>