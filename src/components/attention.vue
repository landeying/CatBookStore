<template>
    <div class="app-attention">
        <p class="attention" :style="styleObj" @click = "gethide()">✚ 关注</p>
        <p class="attention" :style="style" @click = "messagebox()">已关注</p>        
    </div>
</template>
<script>
   import {MessageBox} from 'mint-ui'
    export default{
        data(){
            return {
                style:{
                    display:"none"
                },
                styleObj:{
                    display:"block"
                },
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
            },
            messagebox(){
                MessageBox.confirm("",{
                    title:"取消关注",
                    message:"取消关注后将无法收到作者动态和新书上架提醒",
                    showCancelButton:true,
                    confirmButtonText:"不再关注",
                    cancelButtonText:"取消"
                }).then(action => {
                    if (action == 'confirm') {
                        this.styleObj.display = "block"
                        this.style.display = "none"
                    }
                }).catch(err => {
                    if (err == 'cancel') {
                    return
                    }
                });    
            }
        }
    }
</script>
<style>
.attention{
    margin:0;
    width:60px;
    text-align:center;
    font-size:10px;
    color:#777;
    border-radius:5px;
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
</style>