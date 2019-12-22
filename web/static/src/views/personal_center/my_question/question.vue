<template>
	<div class="wb-mainPart">
		<div class="main-nav clearfix">
        	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">我的收藏（0）</el-menu-item>
			</el-menu>
			<!-- 文章list -->
			<div class="main-content">
				<!-- 无文章的时候的展示 s-->
				<div class="main-empty-tips">
					<p class="art-tips">提示：工作日审稿会在24小时内完成，请耐心等候。如果稿件被删，证明是广告贴</p>
					<div class="art-empty-list">您还没有任何文章。</div>
				</div>
				<!-- 无文章的时候的展示 e-->
				<div>
					<!-- 搜索 -->
					<div class="demo-input-suffix">
						<el-input
							clearable = "true"
						    placeholder="搜索你您收藏的文章"
						    prefix-icon="el-icon-search"
						    v-model="searchName"
						    @change="searchFun"
						    >
						</el-input>
					</div>
					<ul class="art-list-box">
		            	<li class="clearfix list-item">
		            		<div class="fl"><a href="">体验设计师应该具备商业思维吗？</a></div>
		            		<div class="fr time-box">
		            			<span><i class="icon el-icon-time"></i>2019-09-20</span>
		            			<i class="icon el-icon-delete"></i>
		            		</div>
		            	</li>
		            	<li class="clearfix list-item">
		            		<div class="fl"><a href="">体验设计师应该具备商业思维吗？</a></div>
		            		<div class="fr time-box">
		            			<span><i class="icon el-icon-time"></i>2019-09-20</span>
		            			<i class="icon el-icon-delete"></i>
		            		</div>
		            	</li>
		            </ul>
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