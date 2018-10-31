<template>
		 <div class="app-container">
			<!--主界面部分-->
			<!--顶部搜索-->
			<mt-header >
				<mt-button icon="back" slot="left"></mt-button>
				<mt-button icon="more" slot="right"></mt-button>
			</mt-header>
			<input type="text" placeholder="搜索书城" class="search">
			<!--顶部导航-->	
			<mt-navbar class="page-part" >
				<mt-tab-item  v-for="(nbtItem,i) in nbtItems" id="i" v-text="nbtItem"></mt-tab-item>
			</mt-navbar>
			<!--顶部轮播图-->	
			<mt-swipe :auto="2000" >
				<mt-swipe-item v-for="item in list" :key="item.id">
					<img :src="item.img_url">
				</mt-swipe-item>
			</mt-swipe>
			<!--分类导航-->
			<mt-navbar class="page-part" >
				<mt-tab-item  v-for="(nbbItem,i) in nbbItems" id="i" >
					<img slot="icon">
					<b v-text="nbbItem"></b>
				</mt-tab-item>
			</mt-navbar>	
		</div>
</template>
<script>
      export default{
        data(){
            return{
                list:["http://127.0.0.1:3000/imagelist"],
				nbtItems:["精选","女生","男生","听书","免费","书店"],
				nbbItems:["分类","排行","免费","包月","福利"],
            }
        },
        methods:{
            getImge(){
                var url="http://127.0.0.1:3000/imagelist"
                this.$http.get(url).then(result=>{
					console.log(result)
                    this.list=result.body
                })
            },
			
        },
        created(){
            this.getImge()
        }
    }
</script>
<style>
.app-container{
	margin:0;
	padding:0;
	height:100%
}
.app-container .mint-swipe{height:150px}
.app-container .mint-swipe img{width:100%}
.app-container>input.search{
	width:50%;
	height:30px;
	position:relative;
	left:90px;
	top:-35px;
	border-radius:30px;
	opacity:0.5;
	box-sizing:border-box;
	padding: 0 0 0 50px;
	font-size:15px;
	z-index:999;
	margin:0;
}
.app-container>.mint-header{
	background-color:#333;
}
</style>