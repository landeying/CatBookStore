<template>
    <div class="app-booklist">
        <Header></Header>
        <ul class="mui-table-view">
             <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <a @click.prevrnt="jumpInfo(item.id)"> 
                     <img class="mui-media-object mui-pull-left" :src="item.img">
                     <div class="mui-media-body">
                        <p v-text="item.bname"></p>
                        <p class='mui-ellipsis' v-text="item.subtitle"></p>
                    </div>
                </a>
            </li>
        </ul>
        <mt-button  size="large" @click="getMore" v-if="pageIndex < pageCount">
            加载更多
        </mt-button>
        <p v-else>—— 已经到底了 ——</p>
    </div>
</template>
<script>
    import Header from '../components/header.vue'
    export default{
        data(){
            return {
                list:[],
                pageIndex:0,
                hasMore:true,
                pageSize:21,
                pageCount:5
            }
        },
        methods:{
            getMore(){
                this.pageIndex++
                this.hasMore=this.pageIndex <= this.pageCount
                if(!this.hasMore){return}
                var url = "getbooklist"
                url += "?pno="+this.pageIndex+"&pageSize="+this.pageSize
                this.$http.get(url).then(res=>{             var rows = res.body.data
                    var img = res.body.img
                    var obj = []
                    for(var i=0;i<img.length;i++){
                    for(var j=0;j<rows.length;j++){
                        if(i==j){
                            obj.push(Object.assign(rows[j],img[i]))
                            }
                        }
                    }
                    this.list = this.list.concat(obj)
                     console.log (obj)
                    this.pageCount = res.body.pageCount
                })
            },
            jumpInfo(id){
                this.$router.push("/info?id="+id)
            }
        },
        created(){
            this.getMore()
        },
        components:{Header},
    }
</script>
<style stop>
    .app-booklist{
        width:100%;
        padding-bottom:20px;
    }
    .app-booklist{
        margin:50px auto; 
    }
    .mui-table-view a{
        width:345px;
        height:100%;
    }
    p.mui-ellipsis{
        white-space:normal;
        word-wrap:break-word;
        word-break:break-all;
        overflow:hidden;
        padding-top:10px;
    }
    .mui-table-view{
        margin:5px;
    }
    .mui-table-view img.mui-media-object{
        max-width: 72px;
        height:100px;
    }
    .mui-media-body>p:first-child{
        font-size:15px;
        color:#333;
    }
    img[lazy=loading]{
        max-width: 72px;
        height:100px;
    }
    .app-booklist>p{
        text-align:center;
        margin-top:20px;
    }
</style>