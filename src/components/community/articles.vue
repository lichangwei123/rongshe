<template>
	<div class="article">
		<div class="article-c">
			<div class="title">
				<div class="title-L">
					<router-link to="/">精选文章</router-link>
				</div>
				<div class="title-R">
					<router-link to="/published">发表文章</router-link>
				</div>
			</div>
			<div class="articlelist" >
				<ul>
					<li v-for="item in articleList">
						<div class="pic"><img :src="item.imgPic1"></div>
						<div class="tit">
							<div class="small-pic"><img :src="item.imgPic2"></div>
							<router-link to="/separate">{{item.name}}</router-link>
						</div>
						<p>{{item.content}}</p>
						<div class="strategy">{{item.tour}}</div>
					</li>
					<!-- <li>
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
					</li> -->

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
						imgPic1:require("@/assets/community/201805211555119684_369_232.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					},
					{
						imgPic1:require("@/assets/community/201809271604162423.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					},
					{
						imgPic1:require("@/assets/community/201810171738295698_369_232.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					},
					{
						imgPic1:require("@/assets/community/201808311612118979_369_232.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					},
					{
						imgPic1:require("@/assets/community/201809111500375995_369_232.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					},
					{
						imgPic1:require("@/assets/community/201810221236346447_369_232.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					},
					{
						imgPic1:require("@/assets/community/201810071953401041_369_232.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					},
					{
						imgPic1:require("@/assets/community/201810251049079371_369_232.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					},
					{
						imgPic1:require("@/assets/community/201903131429162698_369_232.jpg"),
						imgPic2:require("@/assets/community/201810071902355399.jpg"),
						name:"塞舌尔普拉兰岛上三处绝美的海滩",
						content:"塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩塞舌尔普拉兰岛上三处绝美的海滩",
						tour:"旅游攻略"
					}
				]
			}
		}
	}
</script>

<style>
</style>
