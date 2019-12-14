<template>
	<div class="wb-mainPart">
		<!-- <ul class="main-list-nav clearfix">
            <li>全部文章（0）</li>
            <li class="active">已发布（0）</li>
            <li>草稿箱（0）</li>
            <li>待审核（0）</li>
            <div class="fr add-art" @click="editArtical">+发布文章</div>
        </ul> -->
        <div class="main-nav clearfix">
        	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">全部文章（0）</el-menu-item>
				<el-menu-item index="2">已发布（0）</el-menu-item>
				<el-menu-item index="3">草稿箱（0）</el-menu-item>
				<el-menu-item index="4">待审核（0）</el-menu-item>
				<div class="fr add-art" @click="editArtical">+发布文章</div>
			</el-menu>
			<!-- 文章list -->
			<div class="main-content">
				<!-- 无文章的时候的展示 s-->
				<div class="main-empty-tips">
					<p class="art-tips">提示：工作日审稿会在24小时内完成，请耐心等候。如果稿件被删，证明是广告贴</p>
					<div class="art-empty-list">您还没有任何文章。</div>
				</div>
				<!-- 无文章的时候的展示 e-->
			</div>
			
        </div>
	</div>
</template>
<script>
	export default {
	    name: 'artical',
	    data:function(){
		    return {
		    	activeIndex:'1'
		    }
	    },
	    methods:{
	    	editArtical:function(){
	    		console.log(this.$router);
	    		this.$router.push({path:"/richtext"})
	    	},
	    	handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    }
	    }
	}
</script>