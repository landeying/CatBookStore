<template>
    <div class="app-channel">
        <Header></Header>
        <div class="channel-title">
            <span class="channel-all">全部频道</span>
            <div>
                <span>切换频道</span>
                <span class="edit" :style="styleObj" @click="edit">编辑</span>
                <span class="accomplish" :style="style" @click="edit">完成</span>
            </div>
        </div>
        <div class="channel-zapping">
            <ul>
                <li>
                    <mt-button size="small">精选</mt-button>
                </li>
                <li v-for="(items,i) in channellist"  v-dragging="{item:items,list:channellist,group:'items'}" :key="items.text">
                    <mt-button size="small" v-text="items.text" @click="change(i)"  :class="item==i?changeColor:''"></mt-button>
                    <div class="del" :style="style"><span @click="del(i)">x</span></div>
                </li>
            </ul>
        </div>
        <div class="clear"></div>
        <div>
            <span class="more">点击添加更多频道</span>
            <div class="channel-zapping">
            <ul>
                <li v-for="(item,i) in moreAdd" :key="i">
                    <mt-button size="small" v-text="item.text" @click="add(i)"></mt-button>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
    import Header from '../components/header.vue'
    export default{
        data(){
            return {
                channellist:[
                    {text:"漫画"},
                    {text:"女生"},
                    {text:"男生"},
                    {text:"出版"},
                    {text:"听书"},
                    {text:"积木学院"},
                    {text:"免费"},
                    {text:"虚构书店"},
                    {text:"板栗"},
                ],
                moreAdd:[ 
                    {text:"VIP"},
                    {text:"大神"},
                    {text:"悬疑灵异"},
                    {text:"课外书"},
                ],
                changeColor:{
                    color:true
                },
                item:"",
                style:{
                    display:"none"
                },
                styleObj:{
                    display:"block"
                }
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
            },
            edit(){
               if(this.style.display=="none"){
                    this.style.display = "block"
                    this.styleObj.display = "none"
                }else if(this.styleObj.display = "none"){
                    this.style.display = "none"
                    this.styleObj.display = "block"
                }
            },
            del(i){
                var del=this.channellist.splice(i,1)
                this.moreAdd.push(del[0])
            },
            add(item){
                for(var i=0;i<this.moreAdd.length;i++){
                    if(item==i){
                         console.log(this.moreAdd[i])
                        this.channellist.push(this.moreAdd[i])
                        this.moreAdd.splice(i,1)
                    } 
                    continue
                } 
            }
        },
        mounted() {
                this.$dragging.$on('dragged', ({ value }) => {
                console.log(value.item)
                console.log(value.list)
                console.log(value.group)
            })
        },
        components:{
            Header
        }
    }
</script>
<style>
    .app-channel{
        height:100%;
        padding-top:50px;
        margin:0 20px;
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
        margin-bottom:20px;
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
    .channel-title>div>span.edit,.channel-title>div>span.accomplish{
        color:#489ee7
    }
    .hidden{
        display:none;
    }
    .channel-zapping>ul>li>div.del{
        position:relative;
        top:-40px;
        right:-60px;;
        line-height:16px;
        text-align:center;
        color:#fff;
        font-size:14px;
        width:16px;
        height:16px;
        border-radius:100%;
        background:#ddd;
    }
    .channel-zapping>ul{
        padding-bottom:50px;
    }
</style>