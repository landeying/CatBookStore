<template>
    <div class="app-header">
        <!--顶部搜索-->
		<mt-header fixed>
			    <mt-button slot="left">
                    <img src="..\..\public\img\timg.png" class="pic">
                </mt-button>
				<mt-button icon="more" slot="right" @click.prevent="jump()"></mt-button>
		</mt-header>
		<input type="text" placeholder="搜索书城" class="search" @click="search()" >
        <search :popupVisible="popupVisible" @hide="search"></search>
    </div>
</template>
<script>
    import search from '@/components/search.vue'
    export default{
        data(){
            return {
                 popupVisible:false
            }
        },
        methods:{
            search(){
                if(this.popupVisible)
                    this.popupVisible=false
                else
                    this.popupVisible=true
            },
            jump(){
                this.$router.push("/home/booklist");
            },
        },
        components:{
            search
        }
    }
</script>
<style>
.app-header input.search{
	width:50%;
	height:30px;
	position:relative;
	left:90px;
	top:5px;
	border-radius:30px;
	opacity:0.5;
	box-sizing:border-box;
	padding: 0 0 0 50px;
	font-size:15px;
	z-index:999;
	margin:0;
    position:fixed;
}
.app-header .mint-header{
	background-color:#eee;
}
.app-header .pic{
    width:40px;
    margin-top:5px;
}
.app-header .mintui-more:before{
    color:#555;
} 
</style>