<template>
    <div class="app-cathome">
		<Header></Header>
		<Swiper></Swiper>
		<!--分类导航-->
		<mt-navbar class="page-part" >
			<mt-tab-item  v-for="(item,i) in iconList"  :key="iconList.i" >
				<img slot="icon" :src="item.fimg"  @click = "jump(item.fid)">
				<b v-text="item.fname"></b>
			</mt-tab-item>
		</mt-navbar>
        <book-container :fid="fid"></book-container>
	</div>
</template>
<script>
	import Header from '../components/header.vue'
	import Swiper from '../components/swiper.vue'
	import bookContainer from '../components/bookcontainer.vue'
	export default{
        data(){
            return{
				iconList:[],
				fid:this.$route.params.fid
            }
        },
        methods:{	
			getIcon(){
					this.$http.get("iconlist?fid="+this.fid).then(res=>{
					this.iconList=res.body
					console.log(this.fid)
				})
			},
			jump(fid){
				this.fid = fid;
				this.$router.push("/chome/"+fid);
				console.log(this.fid)
			}
        },
        created(){
			this.getIcon();
        },
		components:{
			Swiper,
			bookContainer,
			Header
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
   .mint-tab-item{
		color:#555;
	}
</style>
