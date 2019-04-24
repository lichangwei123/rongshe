<template>
	<div class="tenant">
		<div class="tenant-c">
			<div class="story">
				<div class="story-title">
					<div class="book"><img src="@/assets/landlord_story/book.png" alt=""></div>
					<div class="ls">租客故事</div>
				</div>
				<ul>
					<li v-for="item in tenantList">
						<div class="pic"><img :src="item.imgPic1"></div>
						<div class="names">
							<p><span><img :src="item.imgPic2"></span>{{item.name}}</p>
							<p class="color">{{item.content}}</p>
						</div>
					</li>
					<!-- <li>
						<div class="pic"><img src="@/assets/tenant_story/5-2.png" alt=""></div>
						<div class="names">
							<p><span><img src="@/assets/tenant_story/people.png" alt=""></span>姓名</p>
							<p class="color">为了陪伴，她在桂林打造了一个家</p>
						</div>
					</li>
					<li>
						<div class="pic"><img src="@/assets/tenant_story/6-2.png" alt=""></div>
						<div class="names">
							<p><span><img src="@/assets/tenant_story/people.png" alt=""></span>vgfshgdjhd</p>
							<p class="color">为了陪伴，她在桂林打造了一个家</p>
						</div>
					</li> -->
				</ul>
			</div>
			<div class="apartment">
				<h3>推荐公寓</h3>
				<ul>
					<li>
						<span>查看详情</span>
						<img src="@/assets/landlord_story/8-2.png" alt="">
						<p><b>￥240/晚</b></p>
						
					</li>
					<li>
						<span>查看详情</span>
						<img src="@/assets/landlord_story/9-2.png" alt="">
						<p><b>￥240/晚</b></p>
					</li>
					<li>
						<span>查看详情</span>
						<img src="@/assets/landlord_story/10-2.png" alt="">
						<p><b>￥240/晚</b></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tenant",
		data(){
			return{
				tenantList:[
					{
						imgPic1:require("@/assets/tenant_story/7-2.png"),
						imgPic2:require("@/assets/landlord_story/people.png"),
						name:"vgfshgdjhd",
						content:"为了陪伴，她在桂林打造了一个家"
					},
					{
						imgPic1:require("@/assets/tenant_story/5-2.png"),
						imgPic2:require("@/assets/landlord_story/people.png"),
						name:"vgfshgdjhd",
						content:"为了陪伴，她在桂林打造了一个家"
					},
					{
						imgPic1:require("@/assets/tenant_story/6-2.png"),
						imgPic2:require("@/assets/landlord_story/people.png"),
						name:"vgfshgdjhd",
						content:"为了陪伴，她在桂林打造了一个家"
					},
				]
			}
		}
	}
</script>

<style>
</style>
