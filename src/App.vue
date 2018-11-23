<template>
    <div class="app-container">
		<!--顶部导航-->	
        <router-view :key="$route.params"></router-view>
            <!--底部菜单栏--> 
        <footer class="footer">
            <mt-tabbar fixed>
                <mt-tab-item id="书城" href="/home">
                    <span slot="icon" class="mui-icon-extra mui-icon-extra-xiaoshuo"></span>
                    书城
                </mt-tab-item>
                <mt-tab-item id="频道" href="/home/channel">
                    <span slot="icon" class="mui-icon-extra mui-icon-extra-heart"></span>
                    频道
                </mt-tab-item>
                <mt-tab-item id="发现" href="/home/found">
                    <span slot="icon" class="mui-icon-extra mui-icon-extra-lamp" ></span>
                    发现
                </mt-tab-item>
                <mt-tab-item id="我的" href="/home/login">
                    <span slot="icon" class="mui-icon mui-icon-home"></span>
                    我的
                </mt-tab-item>
            </mt-tabbar>
        </footer>
    </div>  
</template>
<script>      
</script>  
<style>
.app-container{
     overflow-x:hidden;
     height:100%;
   }
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
 .mint-tab-item-label{
     color:#666;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;
}
.footer .mui-icon,.mui-icon-extra,{
    color:#333;
}
</style>
