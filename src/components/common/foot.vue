<template>
	<!--底部-->
		<div class="bottom">
			<div class="bottom-public">
				<div>
				<dl>
					<dt><img src="@/assets/home/erweima.png" alt=""></dt>
					<dd>下载APP</dd>
				</dl>
				<dl>
					<dt><img src="@/assets/home/erweima.png" alt=""></dt>
					<dd>微信小程序</dd>
				</dl>
				</div>
				<div>
				<img src="@/assets/home/weibo.png" alt="" class="img1">
				<img src="@/assets/home/weixin.png" alt="" class="img1">
				</div>
				<ul>
					<li>
						<a href="javascript:;" class="a1">联系电话</a>
						<a href="javascript:;">关于客栈</a>
					</li>
					<li>
						<a href="javascript:;" class="a1">加入我们</a>
						<a href="javascript:;">与我沟通</a>
					</li>
					<li>
						<a href="javascript:;" class="a1">我是房客</a>
						<a href="javascript:;">我是房东</a>
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
	export default{
	}
</script>

<style>
	.bottom{
	width: 100%;
	height: 249px;
	background: #e6ddd8;
}
.bottom-public{
	width: 941px;
	height: 187px;
	margin:0 auto;
	/*background: #00A398;*/
	display: flex;
	justify-content: space-between;
	padding-top: 62px;
}
.bottom-public dl{
	float: left;
	margin-right: 74px;
	text-align: center;
}
.bottom-public dl dd{
	margin-top: 15px;
}
.bottom-public .img1{
	width: 30px;
	height: 30px;
	margin-top: 20px;
	margin-right: 78px;
}
.bottom-public .a1{
	padding-right: 90px;
}
.bottom-public ul li{
	margin-bottom: 30px;
}
.bottom-public ul li a{
	color: #000000;	
}
</style>