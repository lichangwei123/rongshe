<template>
  <div>
			<Head></Head>
			<Play></Play>
			<Area></Area>
			<Link></Link>
			<Exprise></Exprise>
			<Story></Story>
			<Foot></Foot>
	</div>
</template>

<script>
import Head from '@/components/home/head.vue'
import Play from '@/components/home/play.vue'
import Area from '@/components/home/area.vue'
import Link from '@/components/home/link.vue'
import Exprise from '@/components/home/exprise.vue'
import Story from '@/components/home/story.vue'
import Foot from '@/components/common/foot.vue'

export default{
		components:{
			Head,Play,Area,Link,Exprise,Story,Foot
		}
	}
</script>
<style>
		*{
	margin: 0;
	padding: 0;
}

ul,ol,li{
	list-style: none;
}
a{
	text-decoration: none;
}

.clearfix:after{
	content: "";
	height: 0;
	clear: both;
	display: block;
	overflow: hidden;
	visibility: hidden;
}
/*加载更多*/
.loader{
	display: block;
	width: 193px;
	height: 44px;
	margin:12px auto 18px;
	border: 1px solid #000;
	border-radius: 4px;
	text-align: center;
    line-height: 38px;
    color: #000000;
    
}
</style>