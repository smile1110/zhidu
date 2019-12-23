<template>
	<div class="wb-mainPart">
		<div class="main-nav clearfix">
        	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">我的关注</el-menu-item>
			</el-menu>
			<!-- 文章list -->
			<div class="main-content">
				<!-- 无文章的时候的展示 s-->
				<div class="tips-desc">你还没有关注其他人喔，给你推荐几个活跃用户吧！</div>
				<!-- 无文章的时候的展示 e-->
				<div>
					<ul class="card-list-box">
		            	<li class="clearfix list-item">
		            		<div class="">
		            			<img class="head-icon" src="../../../images/head.jpg">
		            			<p class="user">小玩家</p>
		            			<p class="desc"></p>
		            		</div>
		            		<div class="fr time-box">
		            			<p><span>经验值</span><span>4545</span></p>
		            			<p><span>获赞</span><span>455</span></p>
		            			<button class="btn btn-primary">关注</button>
		            		</div>
		            	</li>
		            </ul>
				</div>
			</div>
        </div>
        <!-- <div class="list">
            <div class="">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :pager-count="5"
                	:current-page.sync="page.pageNo"
                	:page-size.sync="page.pageSize"
                	:page-sizes="[10,20,30,40,50]"
                    layout="prev, pager, next,total, sizes ,jumper"
                    :total="total">
                </el-pagination>
            </div>
        </div> -->
	</div>
</template>
<script>
	export default {
	    name: 'collect',
	    data:function(){
	      	return {
	      		activeIndex:'1',
	      		itemlis:[],
	      		searchName:"",
	      		total:20,
	      		page:{
	      			pageSize:20,
	      			pageNo:1
	      		}
	      	}
	    },
	    methods:{
	    	searchFun:function(info){
	    		console.log(info);
	    	},
	    	handleCurrentChange:function(){			//获取列表数据
	    		var that = this;
                var confObj = $.extend({},that.page);
                that.$axios.get("/api/oms/order-list-standard/list",{params:confObj}).then(function(res){
                    if(res.flag === 20000){
                        that.total = Number(res.total);
                    }else if(res.flag === 50000){
                        that.$message.error(res.msg);
                    }
                });
	    	},
	    	handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    }
	    }
	}
</script>