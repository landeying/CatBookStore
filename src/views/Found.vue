<template>
    <div class="app-found">
        <Header></Header>
        <Swiper></Swiper>
        <div class="mui-card">
			<div class="mui-card-content">
                <div class="card-header">
                    <div>
                        <img src="..\..\public\img\timg.png" >
                            <span class="uname">半城心雨</span>
                        </div>
                        <attention></attention>
                    </div>
                    <div class="card-title">
                        <h4>关于爱情每个人都有话说</h4>
                    </div>
					<div class="mui-card-content-inner">
						<ul>
                            <li>
                                <img src="..\..\public\img\646d61f8gy1fl5uymg68gj20j60quabj.jpg">
                            </li>
                             <li>
                                <img src="..\..\public\img\646d61f8gy1fl5uymg68gj20j60quabj.jpg">
                            </li>
                             <li>
                                <img src="..\..\public\img\646d61f8gy1fl5uymg68gj20j60quabj.jpg">
                            </li>
                        </ul>
					</div>
			    </div>
                <div class="card-footer">
                    <span>阅读：3252</span>
                    <span>点赞:142</span>
                </div>
		</div>
        <div class="mui-card">
			<div class="mui-card-content">
                <div class="card-header">
                    <div>
                        <img src="..\..\public\img\timg.png" >
                        <span class="uname">疾风</span>
                    </div>
                   <attention></attention>
                </div>
				<div class="mui-card-content-inner">
					<ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-right" src="..\..\public\img\646d61f8gy1fl5uymg68gj20j60quabj.jpg">
                                <div class="mui-media-body">
                                    <h4>本来无一物，何处染尘埃</h4>
                                    <p class='mui-ellipsis'>
                                    我想过很多种与我身世相关的可能，就是没有猜到我本来就没有身世可言。
                                    </p>
                                </div>
                             </a>
                        </li>
			        </ul>
				</div>
                <div class="card-footer">
                    <span>阅读：3252</span>
                    <span>点赞:142</span>
                </div>
			</div>
		</div>
    </div>
</template>
<script>
    import Swiper from '../components/swiper.vue'
    import attention from '../components/attention.vue'
    import Header from '../components/header.vue'
    export default{
        data(){
            return {
                style:{
                    display:"none"
                },
                styleObj:{
                    display:"block"
                }
            }
        },
        methods:{
            gethide(){
                if(this.style.display=="none"){
                    this.style.display = "block"
                    this.styleObj.display = "none"
                }else{
                    return
                }
            }
        },
        components:{
            Swiper,
            attention,
            Header
        }
    }
</script>
<style>
.app-found{
	margin:0;
	padding:0;
	height:100%;
	margin-top:-10px;
    padding-bottom:50px;
    margin-bottom:50px;
}
.mui-card-content-inner>ul>li>img{
    width:105px;
    height:120px;
}
.mui-card-content-inner>ul{
    margin:0;
}
div.mui-card {
    padding:20px 0;
    margin:0;
    margin-bottom:10px;
}
.card-header{
    padding:0 20px;
    display:flex;
    justify-content:space-between;
    color:#555;
}
.card-header>div>img{
    width:25px;
    border-radius:100%;
}
div.mui-card-content-inner{
    padding:0;
}
.card-title{
    padding:0 10px;
}
.card-footer{
    padding-left:20px;
}
.card-footer>span{
    padding-right:30px;
    font-size:12px;
    color:#bbb;
}
</style>