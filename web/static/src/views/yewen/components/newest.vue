<!-- 最新列表 -->
<template>
	<div>
		<div class="main-list">
			<ul class="list-box">
				<li class="list-item" v-for="ask in dataList">
					<a href="#" class="item-head"><img :src="ask.user_icon"/></a>
					<div class="item-head-box">
						<a href="" class="head-box-type"><span class="ident">精选</span>
							<span class="head-box-text">{{ask.ask_title}}</span>
						</a>
						<div class="clearfix others-list">
							<p class="fl">
								<a href="others" v-for="(user,ind) in ask.user_ask" v-show="ind<5">
									<img :src="user.user_icon" class="other-head"/>
								</a>
								<i class="icon el-icon-more" v-show="ask.user_ask && ask.user_ask.length>4"></i>
								<span class="others-list-text">等{{ask.user_ask && ask.user_ask.length || 0}}人参与讨论 | 2天前</span>
							</p>
							<p class="fr right-text">
								<span class="others-list-text"><i class="icon el-icon-view"></i>{{ask.ask_love}}</span>
								<span class="others-list-text"><i class="icon el-icon-chat-dot-round"></i>3</span>
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 热门 -->
		<!-- <div class="hot-field">
			<div class="clearfix hot-title">
				<div class="fl"><i class="icon el-icon-chat-line-square"></i><span class="hot">热门专场</span></div>
				<div class="fr"><a class="more" href="#">查看更多</a></div>
			</div>
			<ul class="hot-person clearfix">
				<li class="hot-card">
					<div class="hot-t clearfix">
						<div class="hot-img fl">
							<p class="s1">凌霄</p>
							<p class="s2">腾讯营业部技术负责人</p>
							<p class="s2">腾讯高级分析师</p>
						</div>
						<div class="fr"><img class="hot-head" src="../../../images/head.jpg"></div>
					</div>
					<div class="hot-b">
						<p class="p1">起点学院金牌导师解答 1v1，我是腾讯高级数据分析师@凌霄，欢迎大家向我提问</p>
						<p class="p2"><span>提问：2</span><span>回答：0</span></p>
					</div>
				</li>
				<li class="hot-card">
					<div class="hot-t clearfix">
						<div class="hot-img fl">
							<p class="s1">凌霄</p>
							<p class="s2">腾讯营业部技术负责人</p>
							<p class="s2">腾讯高级分析师</p>
						</div>
						<div class="fr"><img class="hot-head" src="../../../images/head.jpg"></div>
					</div>
					<div class="hot-b">
						<p class="p1">起点学院金牌导师解答 1v1，我是腾讯高级数据分析师@凌霄，欢迎大家向我提问</p>
						<p class="p2"><span>提问：2</span><span>回答：0</span></p>
					</div>
				</li>
			</ul>
		</div> -->
	</div>
</template>
<script type="text/javascript">
	export default {
	    name: '',
	    data:function(){
		    return {
		        dataList:[],
		        page:1,
		        ask_type:100
		    }
	    },
	    methods:{
	        toDetail:function(){
		    	// 到时会区分，前三个是一个详情，后面的一个是单独的详情
		    	this.$router.push({path:'/ywdetail'})
		    },
		    getDataList:function(){
		    	var that = this;
		    	var subObj = {
		    		page:that.page,
		        	ask_type:that.ask_type
		    	}
		    	this.$axios.get('/api/getAskLists',{params:subObj}).then(function(res){
		    		if(res.data.status == 200){
		    			that.dataList = res.data.data;
		    		}
		    	})
		    }
	    },
	    mounted:function(){
            var that = this;
            that.$nextTick(function(){
                // this.initData();        //初始化数据
                this.getDataList();
            })
        }
	}
</script>