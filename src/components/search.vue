<template>
    <div class="app-search">
        <mt-popup v-model="popupVisible" position="right">
            <mt-header fixed>			    
                <mt-button icon="back" slot="left" @click="searchHide"></mt-button>
		    </mt-header>
		    <input type="text" placeholder="恋爱条例" class="r-search" autofocus="autofocus" v-model="kwords">
            <div class="search">
                <ul class="s-res">
                    <li v-for="item in rank.slice(0,21)" v-if="item.bname==kwords">
                        <p v-text="item.bname" @click="jump(item.id)"></p>
                    </li>

                </ul>
                <p class="pop-search">热门搜索</p>
                <div class="ranling-list">
                    <ul>
                        <li v-for="(item,i) in rank.slice(0,10)" @click="jump(item.id)">
                            <span v-text="i+1" :style="i<3?styleObj:styleBg"></span>
                            <span v-text="item.bname"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    export default({
        data(){
            return{
                rank:[],
                styleBg:{
                    background:"#bbb"
                },
                styleObj:{
                    background:"#ff0000"
                },
                id:this.$route.query.id,
                bname:[],
                kwords:""
            }
        },
        methods:{
            getRank(){
                this.$http.get("search").then(res=>{
                    this.rank = res.body                   
                    for(var i=0;i<res.body.length;i++){
                        this.bname.push(res.body[i].bname)
                    }
                })
            },
            searchHide(){
                this.$emit("hide")
            },
            jump(id){
                this.id = id
                this.$router.push("/info?id="+this.id)
                //this.$emit("jump")
            },
        },
        created(){
            this.getRank()
        },
        props:["popupVisible"]
    })
</script>
<style>
div.mint-popup{
    height:100%;
    width:100%;
}
.app-search input.r-search{
	width:70%;
	height:30px;
	position:relative;
	left:50px;
	top:5px;
	border-radius:5px;
    background:#FAFAFA;
	box-sizing:border-box;
	padding: 0 0 0 10px;
	font-size:15px;
	z-index:999;
	margin:0;
    position:fixed;
    font-size:12px;
    color: red;
    text-shadow: 0px 0px 0px #000;
    -webkit-text-fill-color: transparent;
}
.app-search .mint-header{
    box-shadow:0 2px 5px #ddd;
    padding-right:25px;
}
.mint-button-text{
    color:#000;
}
.mintui-back:before {
    content: "\E600";
    color:#555;
}
.search{
    padding:30px 20px;
}
.ranling-list,ul.s-res>li>p{
    font-size:13px;
    color:#333;
}
.ranling-list>ul>li{
    width:40%;
}
.ranling-list>ul>li>span:first-child{
    margin-right:10px;
    display: inline-block;
    width:18px;
    height:18px;
    border:1px solid #ddd;
    text-align:center;
    vertical-align: middle;
    border-radius:5px;
    color:#fff;
    font-size:10px;
}
ul.s-res>li{
   width:200px;
}
ul.s-res>li>p::before{
    content:"\27A2"
}
</style>