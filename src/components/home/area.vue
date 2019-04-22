<template>
	<div>
		<!--玩转民宿公寓-->
		<div class="area">
			<div class="area-center">
				<p>当季热门</p>
				<p>Hot Season</p>
			</div>
		</div>
		<!--玩转民宿公寓下面-->
		<div class="area-public">
			<div class="area-public-center">
				<div class="area-list">
					<div>
						<p>上海</p>
						<p>老巷弄的风情</p>
					</div>
				</div>
				<div class="area-list">
					<div>
						<p>北京</p>
						<p>胡同里的热闹</p>
					</div>
				</div>
				<div class="area-list">
					<div>
						<p>成都</p>
						<p>麻辣穿越的安逸</p>
					</div>
				</div>
				<div class="area-list">
				    <div>
						<p>杭州</p>
						<p>清雅灵秀的江南</p>
					</div>
				</div>
			</div>
		</div>
		<!--当即热门-->
	<!--	<div class="right-away">
			<div class="right-away-center">
				当即热门
			</div>
		</div>-->
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
	/*玩转民宿公寓*/
.area-center{
	width:1226px;
	height: 150px;
	margin:0 auto;
	/*background: #00FF00;*/
	padding-top: 50px;
}
.area-center p{
	text-align: center;
	font-size: 46px;
}
/*玩转民宿公寓下面*/
.area-public-center{
	width: 1226px;
	height: 352px;
	margin: 0 auto;
	/*background: #8A98B9;*/
	display: flex;
	justify-content: space-between;
}
.area-public-center .area-list{
	width: 280px;
	height: 352px;
	border:1px solid #666666;
	position: relative;
}
.area-public-center .area-list div{
	position: absolute;
	width: 100%;
	height: 95px;
	background:rgba(0,0,0,0.2);
	left: 0;
	bottom: 0;
}
.area-public-center .area-list div p:nth-child(1){
	font-size: 30px;
	color: #fff;
	/*padding-left: 15px;*/
	padding-top: 10px;
	text-align: center;
	opacity: 0.7;
	
}
.area-public-center .area-list div p:nth-child(2){
	font-size: 22px;
	color: #fff;
	/*padding-left: 32px;*/
	text-align: center;
	
	opacity: 0.7;
}
.area-public-center .area-list:nth-child(1){
	background: url(../../assets/home/listarea1.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.area-public-center .area-list:nth-child(2){
	background: url(../../assets/home/listarea2.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.area-public-center .area-list:nth-child(3){
	background: url(../../assets/home/listarea3.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.area-public-center .area-list:nth-child(4){
	background: url(../../assets/home/listarea4.png) no-repeat 0 0;
	background-size: 100% 100%;
}
</style>