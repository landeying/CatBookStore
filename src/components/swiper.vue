<template>
    <div class="app-swiper">
        <mt-swipe :auto="2000" >
			<mt-swipe-item v-for="item in list" :key="item.cid">
				<img :src="item.img">
			</mt-swipe-item>
		</mt-swipe>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                 list:["http://127.0.0.1:3000/imagelist"],
            }
        },
        methods:{
             getImge(){                
                this.$http.get("imagelist").then(result=>{
					console.log(result)
                    this.list=result.body
                })
            }
        },
        created() {
            this.getImge()
        },
    }
</script>
<style>
   .app-swiper .mint-swipe{
		height:160px;
		margin-top:50px;
	}
	.app-swiper .mint-swipe img{
		width:100%; 
		height:100%;
		} 
</style>