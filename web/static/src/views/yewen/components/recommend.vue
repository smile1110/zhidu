<!-- 推荐列表 -->
<template>
	<div>
		<div class="main-list">
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
	</div>
</template>
<script type="text/javascript">
	export default {
	    name: '',
	    data:function(){
		    return {
		        dataList:[],
		        ismore:true,
		        page:1,
		        ask_type:101,
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