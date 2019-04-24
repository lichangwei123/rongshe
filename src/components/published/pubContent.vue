<template>
	<div class="content">
		<div class="content-c">
			<h1>发表文章</h1>
			<h3><span>*</span>标题 (最多输入30个字)</h3>
			<textarea class="write-title"></textarea>
			<div class="write-style"></div>
			<textarea class="write">文章内容</textarea>
			<div class="label">
				<b>标签:</b>
				<span>亲子</span>
				<span>拍照</span>
				<span>旅游攻略</span>
			</div>
			<div class="release">发表</div>
			<div class="delete">删除</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"content"
	}
</script>

<style>
</style>
