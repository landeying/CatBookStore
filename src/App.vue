<template>
    <div class="app-container">
        <!--顶部搜索-->
		<mt-header fixed>
			    <mt-button slot="left">
                    <img src="..\public\img\timg.png" class="pic">
                </mt-button>
				<mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		<input type="text" placeholder="搜索书城" class="search">
		<!--顶部导航-->	
        <router-view></router-view>
            <!--底部菜单栏--> 
        <footer class="footer">
            <mt-tabbar fixed>
                <mt-tab-item id="书城" href="/chome">
                    <span slot="icon" class="mui-icon-extra mui-icon-extra-xiaoshuo"></span>
                    书城
                </mt-tab-item>
                <mt-tab-item id="频道" href="/chome/channel">
                    <span slot="icon" class="mui-icon-extra mui-icon-extra-heart"></span>
                    频道
                </mt-tab-item>
                <mt-tab-item id="发现" href="/chome/found">
                    <span slot="icon" class="mui-icon-extra mui-icon-extra-lamp" ></span>
                    发现
                </mt-tab-item>
                <mt-tab-item id="我的" href="/chome/login">
                    <span slot="icon" class="mui-icon mui-icon-home"></span>
                    我的
                </mt-tab-item>
            </mt-tabbar>
        </footer>
    </div>  
</template>  
<style>

.app-container{
     overflow-x:hidden;
     height:100%;
   }
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
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
.app-container>input.search{
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
.app-container>.mint-header{
	background-color:#eee;
}
.pic{
    width:40px;
    margin-top:5px;
}
.mintui-more:before{
    color:#555;
}
</style>
