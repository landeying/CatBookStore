<template>
    <div class="app-bookinfo">
       <div class="info-header">
            <router-link to="/home/booklist">
                <p class="back"></p>
            </router-link>
            <div class="share-m">
                <div class="share mui-icon mui-icon-redo" @click="cancle"></div>
                <mt-popup v-model="popupVisible" position="bottom">
                    <ul>
                        <li><div class="weChat"><img src="..\..\public\img\wx.png" alt=""></div></li>
                        <li><div class="weChat-moments"> <img src="..\..\public\img\weibo.png" alt=""></div></li>
                        <li><div class="weibo"><img src="..\..\public\img\wxm.png" alt=""></div></li>
                        <li><div class="qq"><img src="..\..\public\img\qq.png" alt=""></div></li>
                    </ul>
                    <div class="cancle" @click=" cancle">取消</div>
                </mt-popup>
                <div class="more" @click="getMore"></div>
                <div class="more-content" :class="hide" >
                    <ul>
                        <li>
                            <p class="mui-icon-extra mui-icon-extra-order"  @click="messagebox()">书单</p>
                        </li>
                        <li>  
                            <p class="mui-icon-extra mui-icon-extra-cart" @click="addSuccess()">购物车</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
        <div class="info">
            <div class="title">
                <h3 v-text="bookinfo.bname" class="bname"></h3>
                <span v-text="bookinfo.author" class="bauthor"></span>
                <p v-text="bookinfo.category" class="bcatagory"></p>
            </div>
            <div class="info-pic">
                <img :src="bookinfo.img">
            </div>
        </div>
        <div class="intro">
            <div class="atten">
                <img src="..\..\public\img\webwxgetmsgimg.png" alt="">
            </div>
            <div class="subtitle">
                <div class="icon">
                    <img src="..\..\public\img\1321313.png" >
                </div>
                <div  class="subtitle-info" >
                    <span v-text="bookinfo.subtitle">
                    </span>
                </div>
            </div>
            <div class="details-intr">
                <p v-text="bookinfo.intro"></p>
            </div>
        </div>
        <div class="catalog">
            <div>
                <span>目录</span>
                <p>共40章</p>
            </div>
           <router-link to="/info/catalog"> 
                <div class="enter-catalog"></div>
           </router-link>
        </div>
        <comment :id="bookinfo.id"></comment>
        <div class="more-info">
            <h4>图书更多信息</h4>
            <span>字数：</span>
            <span v-text="bookinfo.num_words"></span><br>
            <span>大小：</span>
            <span v-text="bookinfo.num_bytes"></span><br>
            <span>上架时间：</span>
            <span v-text="bookinfo.shelf_time"></span><br>
            <span>出版社：</span>
            <span v-text="bookinfo.press"></span><br>
            <span>书号：</span>
            <span v-text="bookinfo.bnum"></span><br>
        </div>
    </div>
</template>
<script>
    import comment from '@/components/comment.vue'
    import {MessageBox} from 'mint-ui'
     import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                bookinfo:[], 
                id:this.$route.query.id,
                popupVisible:false,
                hide:{
                    change:true,
                },
            }
        },
        methods:{
            getbookinfo(){
                this.$http.get("getbookinfo?id="+this.id).then(res=>{
                    this.bookinfo=res.body[0]
                })
            },
            getMore(){
                if(this.hide.change){
                    this.hide.change=false
                }
                else
                    return    
            },
            messagebox(){
                MessageBox.prompt("请输入书单名称(最多十五字",{
                    title:"新建书单",
                    showCancelButton:true,
                    confirmButtonText:"确定",
                    cancelButtonText:"取消",
                    inputPattern:/^[\u4e00-\u9fffa-a-zA-Z0-9]{1,15}$/
                }).then(({value}) => {
                    if (value!=null) {
                        console.log(1)
                        Toast("创建成功")
                        this.hide.change=true
                    }else{
                        Toast("您还未输入任何词语，请重新输入")
                        this.hide.change=true
                    }
                }).catch(err => {
                    if (err == 'cancel') {
                    this.hide.change=true
                    return 
                    }
                })    
            },
            addSuccess(){
                Toast("添加成功")
                this.hide.change=true
            },
            cancle(){
                if(!this.popupVisible){
                    this.popupVisible=true;
                }else{
                    this.popupVisible=false
                }
            }
        },
        mounted(){
              this. getbookinfo()
        },
        components:{
            comment
        },
    }
</script>
<style>
.app-bookinfo{
    width:100%;
    background:#fdfdfd;
    padding-bottom:100px;
}
.info,.info-header{
    background:linear-gradient(to right,rgba(69,91,79),rgba(62,84,72,0.8));  
}
.info-header{
    display:flex;
    justify-content: space-between;
    padding-right:20px;
    padding-top:15px;
}
.info{
    display:flex;
    justify-content: space-around;
    height:200px;
}
.title{
    width:45%;
    padding-top:20px;
    padding-left:20px;
}
.bname{
    color:#fdfdfd;
    letter-spacing:1px;
}
.bauthor{
    font:12px "微软雅黑";
    color:#c2be7e;
    margin-top:5px;
}
.bcatagory{
    font-size:14px;
    color:#b9c4bc;
    padding-top:5px;
}
.info-pic>img{
    max-width:120px;
    height:150px;
    background:lightblue;
    margin-top:20px;
    margin-left:-5px;
}
.subtitle,.details-intr,.more-info{
    margin:0 auto;
    width:90%;
    height:100px;
}
.subtitle{
    display:flex;
    justify-content:space-between;
    border-radius:5px;
    border :1px solid #b3a96e;
}
.details-intr{
    height:100%;
    border-bottom:2px solid #eee;
    margin-top:10px;
    margin-bottom:10px;
    padding:5px;
}
.details-intr>p{
    font-size:12px;
    color:#555;
}
.more-info{
    height:100%;
    margin-top:20px;
    border-top:2px solid #eee;
    color:#555;
    font-size:14px;
    padding-top:10px;
}
.atten>img{
    width:100%;
}
.icon{
    display:inline-block;
}
.icon>img{
    box-sizing:border-box;
    width:50px;
    height:50px;
    margin:20px;
}
.subtitle-info{
    width:80%;
    padding-top:20px;
    color:#b3a96e;
    font-size:12px;
    margin-right:10px;
}
p.back::before{
    content:"\276E";
    padding-left:10px;
    height:12px;
    font-size:20px;
    color:#fff;
}
.info>a{
    height:20px;
}
.catalog{
    padding:0 20px;
    display:flex;
    justify-content:space-between;
}
div.enter-catalog::before{
    content:"\276F";
}
.catalog>div>p{
    display:inline-block;
    margin-left:20px;
}
.more::before{
    content:"\205D";
    color:#fff;
}
.share-m{
    display:flex;
    justify-content:space-between;
}
.share.mui-icon{
    color:white;
    padding-right:10px;
}
.more-content{
    width:115px;
    height:80px;
    position:absolute;
    z-index:999;
    background:#fff;
    border-radius:5px;
    right:20px;
    overflow:hidden;
}
.more-content p{
    font-size:15px;
    color:#000;
}
.mui-icon-extra-order:before,.mui-icon-extra-cart:before{
    padding-right:10px;
    padding-left:10px;
}
.change{
    display:none;
}
.more-content li{
    width:100%;
    height:50%;
    margin:0;
    line-height:40px;
}
.more-content>ul{
    margin:0;
}
.more-content li:active{
    background:#ddd;
}
div.mint-msgbox{
    border-radius:8px;
}
div.mint-msgbox-title{
    text-align:left;
    padding-left:20px;
}
div.mint-msgbox-content{
    padding-bottom:0;
    padding-top:20px;
    border:none;
    font-size:14px;
    color:#bbb;
}
div.mint-msgbox-btns{
    margin-bottom:10px;
}
button.mint-msgbox-confirm{
    color:red;
}
.app-bookinfo div.mint-popup{
    height:22%;
}
.app-bookinfo div.mint-popup img{
    width:70px;
    height:60px;
}
.app-bookinfo div.mint-popup >ul{
    height:50%;
}
.app-bookinfo div.cancle{
    text-align:center;
}
</style>