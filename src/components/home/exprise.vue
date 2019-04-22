<template>
	<div>
		<!--客房体验-->
		<div class="room-exprise">
			<div class="room-exprise-center">
				<p>房客体验</p>
				<p>Tenant experience</p>
			</div>
		</div>
		<!--客房体验下面-->
		<div class="room-exprise-public">
			<div class="room-exprise-public-center">
				<div class="room-exprise-list">
					<img src="@/assets/home/exprise1.png" alt="">
					<p>魔都这些小众买手店</p>
					<a href="javascript:;">
						说道如今混迹魔都的青年男女，一个时尚<br>
						  已不足以描述他们，时尚也照已经不是......
					</a>
				</div>
				<div class="room-exprise-list">
					<img src="@/assets/home/exprise2.png" alt="">
					<p>成都馆子里的美食</p>
					<a href="javascript:;">
						"来了就不想走"的成都,相当一部分魅力<br>
						在于美食,而成都美食的魅力，又有相当......
					</a>
				</div>
				<div class="room-exprise-list">
					<img src="@/assets/home/exprese3.png" alt="">
					<p>民宿开张背后的故事</p>
					<a href="javascript:;">
						肇庆"天天惦记"超级民宿开张的故事......
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
	/*客房体验*/
.room-exprise-center{
	width: 1226px;
	height: 124px;
	padding-top: 36px;
	/*background: #008000;*/
	margin:0 auto;
}
.room-exprise-center p{
	text-align: center;
	font-size: 46px;
}
/*客房体验下面*/
.room-exprise-public-center{
	width: 1226px;
	height: 374px;
	margin: 0 auto;
	/*background: #8B0000;*/
	display: flex;
	justify-content: space-between;
}
.room-exprise-public-center .room-exprise-list{
	width: 380px;
	height: 373px;
	/*border: 1px solid #666;*/
}

.room-exprise-public-center .room-exprise-list a{
	font-size: 12px;
	color: #666;
}
.room-exprise-public-center .room-exprise-list img{
	width: 100%;
}
</style>