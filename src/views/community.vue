<template>
  <div>
	<Top></Top>

	<Nava></Nava>

	<Banner></Banner>

	<Articles></Articles>

	<tenFooter></tenFooter>
	</div>
</template>

<script>
	import Top from "@/components/community/top.vue"
	import Nava from "@/components/community/nava.vue"
	import Banner from "@/components/community/banner.vue"
	import Articles from "@/components/community/articles.vue"
		import tenFooter from "@/components/common/tenFooter.vue"
	export default{
		components:{
			Top,
			Nava,
			Banner,
			Articles,
			tenFooter
		}
	}
</script>

<style>
	*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
/*头部*/
.top{
    width: 100%;
    height: 38px;
    background: #ea614a;
	border-bottom: 2px solid #e39b8f;
}
.top .top-c{
    width: 1210px;
    height: 30px;
    margin: 0 auto;
    
}
.top .top-c .top-c-Left{
    float: left;
    height: 30px;
    line-height: 30px;
}
.top .top-c .top-c-Left a{
    font-size: 14px;
    color: #fff;
}
.top .top-c .top-c-Right{
    width: 262px;
    height: 30px;
    line-height: 30px;
    float: right;
}
.top .top-c .top-c-Right a{
    font-size: 14px;
    color: #fff;
    display: inline;
    padding-right: 26px;
}
/*导航栏*/
.nav{
    width: 100%;
    height: 80px;
    background:#ea614a;
}
.nav .nav-c{
    width: 1210px;
    height: 80px;
    margin: 0 auto;
}
.nav .nav-c .logo{
    float: left;
	padding-top:20px;
}
.nav .nav-c .logo img{
	width:200px ;
	height: 45px;
}
.nav .nav-c .list{
    width: 670px;
    height: 80px;
    line-height: 80px;
	margin-left:290px;
}
.nav .nav-c .list ul li{
    float: left;
	width: 126px;
	height: 80px;
}
.nav .nav-c .list ul li a{
    display: inline-block;
    width: 126px;
    height: 80px;
    line-height: 80px;
    color: #fff;
    font-size: 22px;
    text-align: center;
}
.nav .nav-c .list ul li a:hover{
	background:#fff;
	color:#fa0f0f;
}


/*轮播图*/
.banner{
	width: 100%;
	height: 730px;
	margin-top:26px;
	background: #00BFFF;
}
/*精选文章*/
.article{
    width: 100%;
}
.article .article-c{
    width: 1210px;
    margin: 0 auto;
}
/*文章标题*/
.article .article-c .title{
    width: 1210px;
    height: 76px;
}
.article .article-c .title .title-L{
    float:left;
    width: 160px;
    height: 48px;
    line-height: 48px;
    text-align: right;
    margin-top: 30px;
	background:url(../assets/community/book2.jpg) no-repeat left center;
}
.article .article-c .title .title-L a{
    font-size: 22px;
    font-weight: bold;
    color: #000;
}
.article .article-c .title .title-R{
    float:right;
    width: 140px;
    height: 48px;
    line-height: 48px;
    text-align: right;
    margin-top: 30px;
	background:url(../assets/community/bq2.jpg) no-repeat;
}
.article .article-c .title .title-R a{
    font-size: 22px;
    font-weight: bold;
    color: #000;
}
/*文章列表样式*/
.article .article-c .articlelist ul{
    width: 1300px;
    overflow: hidden;
}
.article .article-c .articlelist ul li{
    width: 350px;
    height: 446px;
    border: 1px solid #bbb;
    margin-top: 40px;
    float: left;
    margin-right: 76px;
	
}
.article .article-c .articlelist ul li .pic{
    width: 350px;
    height: 232px;
	margin-bottom:12px;
    background: springgreen;
}
.article .article-c .articlelist ul li .pic img{
	width: 350px;
	height: 232px;
}
.article .article-c .articlelist ul li .tit{
    width: 280px;
    height: 34px;
    margin-left: 28px;
}
.article .article-c .articlelist ul li .tit .small-pic{
    float: left;
    width: 34px;
    height: 34px;
	margin-right: 6px;
}
.article .article-c .articlelist ul li .tit .small-pic img{
	width:34px;
	height: 34px;
	border-radius: 50%;
}
.article .article-c .articlelist ul li .tit a{
    font-size: 16px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    height: 22px;
    margin-top: 6px;
}
.article .article-c .articlelist ul li .tit a:hover{
    color: #ff9800;
    border-bottom: 1px solid #000;
}
.article .article-c .articlelist ul li p{
    width: 246px;
    height: 68px;
    margin:10px 0 0 28px;
    font-size: 12px;
    color: #000;
    line-height: 24px;
}
.article .article-c .articlelist ul li .strategy{
    width: 60px;
    height: 22px;
    border: 1px solid #000000;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    margin:20px 0 0 28px;
}



</style>
