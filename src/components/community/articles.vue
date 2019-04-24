<template>
	<div class="article">
		<div class="article-c">
			<div class="title">
				<div class="title-L"><a href="#">精选文章</a></div>
				<div class="title-R"><a href="#">发表文章</a></div>
			</div>
			<div class="articlelist" >
				<ul>
					<li v-model="articleList">
						<div class="pic"><img src="@/assets/community/201805211555119684_369_232.jpg" alt=""></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/community/201809271604162423.jpg" alt=""></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/community/201810171738295698_369_232.jpg" alt=""></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/community/201808311612118979_369_232.jpg" alt=""></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/community/201809111500375995_369_232.jpg"></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/community/201810221236346447_369_232.jpg" alt=""></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/community/201810071953401041_369_232.jpg" alt=""></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/community/201810251049079371_369_232.jpg" alt=""></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/community/201903131429162698_369_232.jpg" alt=""></div>
						<div class="tit">
							<div class="small-pic"><img src="@/assets/community/201810071902355399.jpg" alt=""></div>
							<a href="#">塞舌尔普拉兰岛上三处绝美的海滩</a>
						</div>
						<p>塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩</p>
						<div class="strategy">旅游攻略</div>
					</li>

				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "articles",
		data(){
			return{
				articleList:[
					{
						imgPic:("@/assets/community/201805211555119684_369_232.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						
					}
				]
			}
		}
	}
</script>

<style>
</style>
