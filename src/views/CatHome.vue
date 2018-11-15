<template>
    <div class="app-cathome">
		<Swiper></Swiper>
		<!--分类导航-->
		<mt-navbar class="page-part" >
			<mt-tab-item  v-for="(item,i) in iconList" id="i" :key="iconList.id">
				<img slot="icon" :src="item.icon_url">
				<b v-text="item.icon_name"></b>
			</mt-tab-item>
		</mt-navbar>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div  class="good-books">
						<h4 class="card-word">好书推荐</h4>
						<img src="..\..\public\img\646d61f8gy1fl5uymg68gj20j60quabj.jpg" >
						<span class="card-word">重返17岁</span>
					</div>
					<div>
						<div class="new-books">
							<h4 class="card-word">新书出炉</h4>
							<span class="card-word">精选好书，定期更新</span>
							<img src="..\..\public\img\banner(1).jpg">
						</div>
						<div class="new-books">
							<h4 class="card-word">全新人生百态集</h4>
							<img src="..\..\public\img\banner(2).jpg">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--口碑力荐区-->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="card-title">口碑力荐</div>
				<div class="mui-card-content-inner cart-content-inner" >
					<ul class="card-pics" >
						<li v-for="item in chList" :key="item.id">
							<img :src="item.chimg_url" class="books">
							<div v-text="item.content">	
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--热门畅销区-->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="card-title">热门畅销</div>
				<div class="mui-card-content-inner cart-content-inner">
					<ul class="card-pics" >
						<li v-for="item in chList" :key="item.id">
							<img :src="item.chimg_url" class="books">
							<div v-text="item.content">	
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--人气在读区-->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="card-title c-t-top">
					<span>喜欢"穿越时空"类的人正在读</span>
					<span>查看更多 &gt;</span>
				</div>
				<div class="mui-card-content-inner cart-content-inner">
					<ul class="card-pics" >
						<li v-for="(item,i) in chList.slice(0,3)">
							<img :src="item.chimg_url" class="books">
							<div v-text="item.content"></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media" v-for="item in chList.slice(3,7)" >
						<a href="javascript:;">
							<img class="mui-media-object mui-pull-left" :src="item.chimg_url">
							<div class="mui-media-body">
									幸福
								<p class='mui-ellipsis' v-text="item.content">
								</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from '../components/swiper.vue'
	export default{
        data(){
            return{
				iconList:["http://127.0.0.1:3000/iconlist"],
				chList:["http://127.0.0.1:3000/chimglist"],
            }
        },
        methods:{	
			getIcon(){
				this.$http.get("iconlist").then(res=>{
					console.log(res)
					this.iconList=res.body
				})
			},
			getChImg(){
				this.$http.get("chimglist").then(res=>{
					console.log(res)
					this.chList=res.body
				})
			}	
        },
        created(){
			this.getIcon()
			this.getChImg()
        },
		components:{
			Swiper
		}
    }
</script>
<style>
	.app-cathome{
		margin:0;
		padding:0;
		height:100%;
		margin-top:-10px;
	}
	.mui-card{
		padding: 5px 0 30px 0;
	}
	.app-cathome .mui-card .books{
		width:100%;
		height:112px;
		padding:10px;
	}
	.app-cathome .mui-card-content-inner{
		display:flex;
		justify-content: space-between;
	}
	.app-cathome .mui-card-content-inner .card-word{
		margin-left:20px;
	}
	.cart-content{
		height:100%;
	}
	.app-cathome  .cart-content-inner{
		height:100%;
		padding:0
	}
	.good-books>img{
		width:140px;
		height:188px;
		margin-top:10px;
	}
 	.new-books>img{
		width:170px;
		height:80px;
		margin-left:20px;
	}
	.good-books>img,.new-books>img{
		border-radius:5px;
	}
	.app-cathome div.mui-card:last-child{
		margin-bottom:100px;
	}
	.app-cathome ul.card-pics .books,.card-pics>li>div{
		width:117px;
		padding:0 10px;
		color:#555;
	}
	ul.card-pics{
		margin:0 auto;
		padding:0;
	}
	ul.card-pics>li{
		float:left;
		list-style:none;
		margin:0;
	}
	.card-title{
		font:15px black;
		font-weight:bold;
		padding:10px;
	}
	.c-t-top{
		display:flex;
		justify-content:space-between;
	}
	.c-t-top>span:last-child{
		font-weight:normal;
		font-size:12px;
	}
</style>