<!-- 最新列表 -->
<template>
	<div>
		<div class="main-list" id="listbox">
			<ul class="list-box">
				<li class="list-item" v-for="ask in dataList" @click="toDetail">
					<a href="#" class="item-head"><img :src="ask.user_icon"/></a>
					<div class="item-head-box">
						<a href="" class="head-box-type">
							<!-- <span class="ident">精选</span> -->
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
		<div class="loading-more" v-show="loadingFlag">正在加载，请稍等...</div>
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
	import $ from 'jquery';

	export default {
	    name: '',
	    data:function(){
		    return {
		        dataList:[],
		        ismore:true,
		        page:1,
		        ask_type:100,
		        loadingFlag:false
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
		    	if(!this.ismore){
		    		return false;
		    	}
		    	this.$axios.get('/api/getAskLists',{params:subObj}).then(function(res){
		    		if(res.data.status == 200){
		    			var resultArr = res.data.data;
		    			that.loadingFlag = false;
		    			for(var i=0;i<resultArr.length;i++){
		    				that.dataList.push(resultArr[i]);
		    			}
		    			if(res.data.data.length<8){
		    				that.ismore = false;
		    			}else if(res.data.data.length == 8){
		    				that.ismore = true;
		    			}
		    		}
		    	})
		    },
		    listScroll: function () {
	            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	            console.log("-----------")  
	            console.log(clientHeight)
	            // 设备/屏幕高度
	            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	            // console.log( "滚动的高度："+ scrollTop);
	            var ulHeight = $("#listbox").height();
	            console.log(ulHeight)
	            console.log(scrollTop)
	            if( clientHeight+scrollTop > ulHeight+90 ){
	            	this.page++;
	            	this.loadingFlag = true;
	            	this.getDataList();
	            }else{
	            	this.showClass = false;
	            }
	        }
	    },
	    mounted:function(){
            var that = this;
            that.$nextTick(function(){
                // this.initData();        //初始化数据
                this.getDataList();
            })
            window.addEventListener('scroll', this.listScroll,true)
        }
	}
</script>