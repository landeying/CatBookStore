<template>
    <div class="app-bookcontainer">
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div  class="good-books">
						<h4 class="card-word" v-text="aname[0]" ></h4>
							<img  :src="img[0]" >
					</div>
					<div>
						<div class="new-books">
							<h4 class="card-word"  v-text="aname[1]"></h4>
							<span class="card-word">精选好书，定期更新</span>
								<img :src="img[1]">
						</div>
						<div class="new-books">
								<h4 class="card-word">全新人生百态集</h4>
								<img :src="img[2]" >
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--口碑力荐区-->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="card-title"  v-text="aname[2]" :aid="aid[2]"></div>
				<div class="mui-card-content-inner cart-content-inner" >
					<ul class="card-pics" >
						<li v-for="(item,i) in info" :key="item.id" v-if="item.aid==aid[2]">
								<img :src="item.img" class="books"  @click="jumpInfo(item.id)">
								<div v-text="item.subtitle">	
								</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--热门畅销区-->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="card-title"  v-text="aname[3]" :aid="aid[3]"></div>
				<div class="mui-card-content-inner cart-content-inner">
					<ul class="card-pics" >
						<li v-for="(item,i) in info" :key="item.id" v-if="item.aid==aid[2]">
								<img :src="item.img" class="books"  @click="jumpInfo(item.id)">
								<div v-text="item.subtitle">	
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
					<span  v-text="aname[4]" ></span>
					<span @click.prevent="jump()">查看更多 &gt;</span>
				</div>
				<div class="mui-card-content-inner cart-content-inner">
					<ul class="card-pics" >
						<li v-for="(item,i) in info" v-if="item.aid==aid[3]" :key="item.id">		
								<img :src="item.img" class="books" @click="jumpInfo(item.id)">
								<div v-text="item.subtitle"></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media" v-for="(item,i) in info" v-if="item.aid==aid[4]">
						<a href="javascript:;">
							<img class="mui-media-object mui-pull-left" :src="item.img" @click = "jumpInfo(item.id)">
							<div class="mui-media-body">
								<p class='mui-ellipsis' v-text="item.subtitle">
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
	export default{
        data(){
            return{
				info:[],
				aid:[],
				aname:[],
				img:[],
            }
        },
        methods:{	
			jump(){
                this.$router.push("/booklist");
            },
			getInfo(){
				this.$http.get("book?fid="+this.fid).then(res=>{
					this.info = res.body
					console.log(this.info)
					console.log(this.fid)
					for(var item of this.info){
						this.img.push(item.img)
					}
					this.img = this.img.slice(0,3)
				})
			},
			getArea(){
				this.$http.get("area").then(res=>{
					for(var item of res.body){
						this.aid .push(item.aid)
						this.aname.push(item.aname)
					}
				})
			},
			jumpInfo(id){
                this.$router.push("/info?id="+id)
            }
        },
		mounted(){
			this.getInfo()
			
		},
        created(){
			this.getArea()
        },
		props:["fid"]
    }
</script>
<style>
    .mui-card{
		padding: 5px 0 30px 0;
	}
	.mui-card .books{
		width:100%;
		height:112px;
		padding:10px;
	}
	.mui-card-content-inner{
		display:flex;
		justify-content: space-between;
	}
	.mui-card-content-inner .card-word{
		margin-left:20px;
	}
	.cart-content{
		height:100%;
	}
	.cart-content-inner{
		height:100%;
		padding:0
	}
	.good-books img{
		width:140px;
		height:188px;
		margin-top:10px;
		margin-left:20px;
	}
 	.new-books img{
		width:170px;
		height:80px;
		margin-left:20px;
	}
	.good-books img,.new-books img{
		border-radius:5px;
	}
	.div.mui-card:last-child{
		margin-bottom:100px;
	}
    ul.card-pics .books,.card-pics>li>div{
		width:117px;
		padding:0 10px;
		color:#555;
	}
	ul.card-pics{
		margin:0 auto;
		padding:0;
	}
	ul.card-pics li{
		float:left;
		list-style:none;
		margin:0;
		padding-left:5px;
	}
	.card-title{
		font:15px black;
		font-weight:bold;
		padding:10px;
		margin-bottom:10px;
	}
	.c-t-top{
		display:flex;
		justify-content:space-between;
	}
	.c-t-top>span:last-child{
		font-weight:normal;
		font-size:12px;
	}
    .router-link-exact-active{
		color:#555;
	}
	ul.card-pics div{
		font-size:12px;
		width:110px;
		height:40px;
		padding-left:10px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
</style>