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
					
					<ul class="list-box">
		            	<li class="clearfix">
		            		<div class="fl"></div>
		            		<div class="fr"></div>
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
	      		total:20,
	      		page:{
	      			pageSize:20,
	      			pageNo:1
	      		}
	      	}
	    },
	    methods:{
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