<template>
    <div class="app-login">
        <mt-header fixed title="猫咪书屋">			    
            <mt-button icon="back" slot="left"></mt-button>
		</mt-header>
        <form>
            <div>用户登录</div>
            <input type="text" id="uname" v-model="unameval" placeholder="用户名"><br>
            <input type="password" id="upwd" v-model="upwdval" placeholder="密码"><br>
            <input type="button" id="btn" value="登录"  @click="btnSubmit()"><br>
        </form>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        data(){
            return {
                unameval:"",
                upwdval:""
            }
        },
        methods:{
            btnSubmit(){
                var u = this.unameval
                var p = this.upwdval
                this.$http.get("login?uname="+u+"&upwd="+p).then(res=>{
                    console.log(res)
                    if(res.body.code==1){
                        Toast(res.body.msg)
                        this.$router.push("/")
                    }else
                        Toast(res.body.msg)
                })
            }
        }
    }
</script>
<style>
html,body{
    height:100%;
}
.app-login>form{
    width:300px;
    margin:0px auto;
    padding-bottom:50px;
    border-bottom:1px solid #dbdbdb;
    position:relative;
    top:100px;
}
.app-login div{
    text-align:center;
    margin:20px 0;
    font:18px;
}
#uname,#upwd{
    width:300px;
    height:50px;
    border-radius:7px;
    font-size:14px;
}
#btn{
    color:white;
    width:100px;
    height:40px;
    border-radius:5px;
    font-size:14px;
    background:#c11;
}
.app-login .mint-header{
	background-color:#eee;
    color:#555;
}
</style>