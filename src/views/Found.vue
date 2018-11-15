<template>
    <div class="app-found">
        <Swiper></Swiper>
        <div class="mui-card">
			<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
			    </div>
		    <div class="mui-card-footer">页脚</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<ul class="mui-table-view">
                            <li class="mui-table-view-cell mui-media">
                                <a href="javascript:;">
                                    <img class="mui-media-object mui-pull-right" src="..\..\public\img\timg.png">
                                    <div class="mui-media-body">
                                        远眺
                                        <p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
                                    </div>
                                </a>
                            </li>
			            </ul>
					</div>
			    </div>
		    <div class="mui-card-footer">页脚</div>
		</div>
    </div>
</template>
<script>
    import Swiper from '../components/swiper.vue'
    export default{
        data(){
            return {
                
            }
        },
        components:{
            Swiper
        }
    }
</script>
<style>
.app-found{
		margin:0;
		padding:0;
		height:100%;
		margin-top:-10px;
	}
</style>