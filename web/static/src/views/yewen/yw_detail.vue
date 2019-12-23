<template>
	<div class="yw-main-body">
		<div class="yw-aside-left">
			<!-- 头部问题 -->
			<div class="yw-qtop">
				<h2 class="yw-head">【每日一问】作为产品经理，领导对你提出过什么过分的要求？</h2>
				<p class="yw-desc">这里没有上司经理主管领导老板，尽管讲出你的不痛快！</p>
				<div class="yw-remind">
					<span class="sp1">4小时前</span>
					<span class="sp1">298人阅读</span>
				</div>
			</div>
			<!-- 下面回答 -->
			<div class="yw-abottom">
				<div class="yw-ahead clearfix">
					<div class="fl yw-remind">
						<span class="sp1">回答</span>
						<span class="sp1">共3个</span>
					</div>
					<div class="fr">
						<el-dropdown>
                            <a href="" class="linka">按点击量排序</a>
							<i class="icon el-icon-caret-bottom"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item divided><router-link @click.native="checkMy" to="/my/artical">按时间排序</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link @click.native="checkMy" to="/my/collect">按点赞量排序</router-link></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
						
					</div>
				</div>
				<ul class="content-main">
					<li class="yw-content">
						<div class="yw-content-head clearfix">
							<div class="fl">
								<img class="head-img" src="../../images/head.jpg">
								<div class="head-desc">
									<p class="p1">请叫我马小胖</p>
									<p class="p2">小程序</p>
								</div>
							</div>
							<div class="fr">
								<span class="star_num"><i>3</i><i class="icon el-icon-star-on"></i></span>
							</div>
						</div>
						<div class="yw-content-main">短视频潮流下的针对某个领域的垂直细分，和电商一样的打法，快手只是最早动手的</div>
						<div class="yw-content-bottom clearfix">
							<div class="fl time">47分钟前</div>
							<div class="fr reply">回复</div>
						</div>
						<!-- 点击回复后，出的部门：没有登录和已登录 -->
						<div class="answer">
							<div class="no-sign">^-^我来说两句，我先 <span>登录</span><span>注册</span></div>
							<div class="has-sign clearfix">
								<textarea class="answer-content" placeholder="^-^我来说两句....."></textarea>
								<div class="btn-box fr"><span>取消</span><span class="sure">评论</span></div>
							</div>

						</div>
					</li>
					<li class="yw-content">
						<div class="yw-content-head clearfix">
							<div class="fl">
								<img class="head-img" src="../../images/head.jpg">
								<div class="head-desc">
									<p class="p1">请叫我马小胖</p>
									<!-- <p class="p2">小程序</p> -->
								</div>
							</div>
							<div class="fr">
								<span class="star_num"><i>3</i><i class="icon el-icon-star-off"></i></span>
							</div>
						</div>
						<div class="yw-content-main">短视频潮流下的针对某个领域的垂直细分，和电商一样的打法，快手只是最早动手的</div>
						<div class="yw-content-bottom clearfix">
							<div class="fl time">47分钟前</div>
							<div class="fr reply">回复</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 右侧 -->
		<div class="yw-aside-right">
			<!-- 选上红包 -->
			<div class="card-hot-box box-shadow">
				<div class="hot-box-t">
					<img src="../../images/head.jpg">
					<div>
						<h3>sole</h3>
						<p class="text2">天天问最可爱的运营</p>
					</div>
					<span style="flex-grow:1"></span>
					<!-- <a href="javascript:void(0);" class="text2">更多&gt;</a> -->
				</div>
				<div class="hot-box-m">
					<div class="yw-button"><i class="icon el-icon-attend"></i><span>关注问题</span></div>
					<div class="yw-button"><i class="icon el-icon-plus"></i><span>写回答</span></div>
				</div>
			</div>
			<!-- 热门推荐 -->
			<div class="card-hot-box box-shadow">
				<h3 class="hot-title"><i class="icon el-icon-remen"></i>热门推荐</h3>
				<ul class="hot-artical-ul">
					<li class="hot-artical-li">
						<p class="hot-li-title">你见过哪些迷信互联网的歪理邪说和案例？</p>
						<p class="hot-info"><span class="s1">你好先生</span><span class="s1">2019-09-20</span></p>
					</li>
					<li class="hot-artical-li">
						<p class="hot-li-title">你见过哪些迷信互联网的歪理邪说和案例？</p>
						<p class="hot-info"><span class="s1">你好先生</span><span class="s1">2019-09-20</span></p>
					</li>
					<li class="hot-artical-li">
						<p class="hot-li-title">你见过哪些迷信互联网的歪理邪说和案例？</p>
						<p class="hot-info"><span class="s1">你好先生</span><span class="s1">2019-09-20</span></p>
					</li>
				</ul>
			</div>
			<!-- 邀请加入qq群 -->
			<div class="card-hot-box box-shadow pt30">
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
<script type="text/javascript">

</script>
<style type="text/css">
	.yw-qtop{padding: 30px;color: #999;font-size: 14px;line-height: 25px;background-color: white;box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.1);text-align: left;}
	.yw-qtop .yw-head{line-height: 27px;font-size: 18px;color: #333;font-weight: bold;margin-bottom: 14px;}
	.yw-qtop .yw-desc{margin-bottom: 40px;color:#999;font-size:14px;}
	.yw-qtop .yw-remind{font-size:0;}
	.yw-remind .sp1{display: inline-block;font-size:14px;color:#999;}
	.yw-remind .sp1:first-child:after{content:"|";display: inline-block;margin:0 8px;width:1px;height:12px;vertical-align: top;font-weight:100;color:#999;}
	/*回答*/
	.yw-abottom{background-color: white;margin: 20px 0;box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.1);box-sizing: border-box;border-radius: 4px;}
	.yw-abottom .yw-ahead{height: 70px;padding: 0 30px;position: relative;line-height: 70px;border-bottom:1px solid #EBEEF5;}
	.yw-abottom .yw-ahead .yw-remind .sp1:first-child{font-size:18px;color:#333;font-weight: bold;}
	.linka{font-size:14px;}
	.el-dropdown-menu__item--divided{border-top:0;}
	#dropdown-menu-7148 .el-dropdown-menu__item--divided{border-top:0;}
	ul.content-main li.yw-content{border-bottom:1px solid #EBEEF5;padding-bottom:38px;}
	.yw-content-head{height:60px;margin:10px 30px 0;}
	.yw-content-head .head-img{width:40px;height:40px;border-radius: 50%;display: inline-block;vertical-align: top;margin-top: 10px;}
	.yw-content-head .head-desc{display: inline-block;margin-left:8px;}
	.yw-content-head .head-desc .p1{font-size: 16px;line-height: 22px;margin-top:10px;}
	.yw-content-head .head-desc .p2{font-size: 12px;text-align: left;}
	.yw-content-head .star_num{line-height: 40px;width:60px;height:40px;background:#EBEEF5;border-radius: 5px;margin-top:10px;text-align: center;cursor: pointer;}
	.yw-content-head .star_num .icon{font-size:16px;vertical-align: top;margin-top:13px;margin-left:2px;}
	.yw-content-main{padding:30px;margin-top:20px;}
	.yw-content-bottom{padding: 0 30px;}
	.yw-content-bottom .time,.yw-content-bottom .reply{font-size:14px;color:#999;}
	.yw-content-bottom .reply{cursor: pointer;}
	.yw-content-bottom .reply:hover{color:#f56040;}
	ul.content-main li.yw-content .answer{padding:30px;background:#EBEEF5;margin:20px 30px;color:#999;}
	ul.content-main li.yw-content .answer .no-sign{background:#fff;font-size:14px;line-height:32px;text-align: center;}
	ul.content-main li.yw-content .answer .no-sign span{margin-right:8px;color:#f56040;}
	ul.content-main li.yw-content .answer .no-sign span.sp1:after{content:".";}
	ul.content-main li.yw-content .answer .no-sign span:hover{margin-right:8px;color:#f04622;}
	ul.content-main li.yw-content .answer .btn-box span{color:#f56040;cursor: pointer;margin-top:30px;}
	ul.content-main li.yw-content .answer .btn-box span:hover{color:#f56040;}
	ul.content-main li.yw-content .answer .btn-box span.sure{padding:8px 18px;background:#f56040;color:#fff;border-radius: 4px;margin-left:12px;}
	ul.content-main li.yw-content .answer .answer-content{padding:8px 12px;display: block;border:1px solid #EBEEF5;width: 100%;box-sizing: border-box;height:78px;}
	/*右侧按钮*/
	.yw-button{display: inline-block;width:118px;height:40px;line-height:40px;background:#f56040;color:#fff;border-radius: 5px;text-align: center;cursor: pointer;}
	.yw-button:first-child{margin-right:12px;}
	.yw-button:hover{background:#f04622;}
</style>