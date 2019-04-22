<template>
	<div>
	<!--当即热门下面-->
		<div class="right-away-public">
			<div class="right-away-center">
				<p>安心住保障</p>
				<p>Reassurance</p>
			</div>
			<div class="right-away-public-center">
				<!--<div class="right-away-list">1</div>
				<div class="right-away-list">2</div>
				<div class="right-away-list">3</div>
				<div class="right-away-list">4</div>-->
				<dl>
					<dt>
						<img src="@/assets/home/2_03.png" alt="">
					</dt>
					<dd>先行赔付</dd>
					<dd>稳定保障</dd>
				</dl>
				<dl>
					<dt>
						<img src="@/assets/home/3_03.png" alt="">
					</dt>
					<dd>安全保险</dd>
					<dd>人身保障</dd>
				</dl>
				<dl>
					<dt>
						<img src="@/assets/home/4_03.png" alt="">
					</dt>
					<dd>贴心客服</dd>
					<dd>随时在线</dd>
				</dl>
				<dl>
					<dt>
						<img src="@/assets/home/5_03.png" alt="">
					</dt>
					<dd>房屋保真</dd>
					<dd>专业审核</dd>
				</dl>
			</div>
		</div>
		<!--加载更多-->
		<div class="load-more">
		    <a href="javascript:;" class="loader">
		    	加载更多
		    </a>
		</div>
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
	.right-away-public{
	height: 490px;
	width: 1226px;
	margin: 0 auto;
	background:#f7f7f7 ;
	margin-top: 30px;
}
.right-away-center{
	width: 1226px;
	height: 121px;
	margin:0 auto;
	/*background: #006666;*/
}
.right-away-center p{
	font-size: 46px;
	text-align: center;
}
.right-away-public-center{
	width: 1226px;
	height: 350px;
	margin:0 auto;
	padding-top: 19px;
	/*background: #00FF66;*/
	display: flex;
	justify-content: space-between;
}
.right-away-public-center dl dd{
	text-align: center;
}
.right-away-public-center dl dd:nth-of-type(1){
	font-size: 36px;
	color: #666;
}
.right-away-public-center dl dd:nth-of-type(2){
	font-size: 24px;
	color: #666;
}
</style>