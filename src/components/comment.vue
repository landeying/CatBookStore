<template>
    <div class="app-comment">
        <textarea placeholder="写书评" maxlength="120" v-model="msg"></textarea>
         <mt-button size="small" @click="postcomment()">
            发表评论
        </mt-button>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        data(){
            return {
                msg:"",
            }
        },
        methods:{        
            postcomment(){
                var bid = this.id
                var pmsg = this.msg
                console.log(this.id)
                if(pmsg.trim().length==0){
                    Toast("评论内容不能为空")
                    return
                }
                var url="http://127.0.0.1:3000/postcomment"
                this.$http.post(url,{uid:bid,msg:pmsg}).then(res=>{
                    Toast("发表成功")
                })
            }
        },
        created(){
              
        },
        props:["id"]
    }
</script>
<style>
    .app-comment{
        width:90%;
        margin:0 auto;
    }
   .app-comment textarea{
        border:1px solid #b3a96e;
        border-radius:8px;
        background:#fdfdfd;
        font-size:14px;
    }
    button.mint-button--small{
        font-size:13px;
    }
</style>