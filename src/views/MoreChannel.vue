<template>
    <div class="app-channel">
        <div class="channel-title">
            <span class="channel-all">全部频道</span>
            <div>
                <span>切换频道</span>
                <span>编辑</span>
            </div>
        </div>
        <div class="channel-zapping">
            <ul>
                <li v-for="(items,i) in channellist">
                    <mt-button size="small" v-text="items" @click="change(i)"  :class="item==i?changeColor:''"></mt-button>
                </li>
            </ul>
        </div>
        <div class="clear"></div>
        <div>
            <span class="more">点击添加更多频道</span>
            <div class="channel-zapping">
            <ul>
                <li v-for="item in morechannel">
                    <mt-button size="small" v-text="item"></mt-button>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                channellist:[
                    "精选","漫画","女生","男生","出版","听书","积木学院","免费","虚构书店","板栗"
                ],
                morechannel:["VIP","大神","悬疑灵异","课外书"],
                changeColor:{
                    color:true
                },
                item:""
            }
        },
        methods:{
            change(i){
                console.log(i)
                for(var items in this.channellist){  
                      if(items==i){
                        this.item=items
                    }
                    continue
                    console.log(this.item)
                }
                
                
                /*document.querySelectorAll("div.channel-zapping ul li")[i].firstElementChild.style.color="red";*/
            }
        },
    }
</script>
<style>
    .app-channel{
        height:100%;
        padding-top:50px;
        margin:20px;
    }
    li{
        list-style:none;
        float:left;
        margin:10px;
        
    }
    ul{
        overflow:hidden;
        height:100%;
        padding:0;
    }
    .channel-title>.channel-all{
        display:block;
        margin-bottom:10px;
    }
    .channel-title>div{
        display:flex;
        justify-content:space-between;
    }
    .clear{
        clear:both;
    }
    .channel-zapping .mint-button{
        border-radius:20px;
        width:80px;
    }
    .channel-zapping .color{
        color:#d89;
    }
    .channel-title>div>span,span.more{
        font-size:14px;
        color:#666
    }
    .channel-title>div>span:last-child{
        color:#489ee7
    }
</style>