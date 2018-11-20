 <template>
    <div class="app-catalog">
        <mt-header fixed title="猫咪书屋">			    
		</mt-header>
        <div>
            <mt-navbar v-model="selected" >
                <div>共40章</div>
                <mt-tab-item id="1">1-20章</mt-tab-item>
                <mt-tab-item id="2">21-40章</mt-tab-item>
            </mt-navbar>    
        </div>

<!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" >
                <mt-cell v-for="n in 20" :title="'第' + n + '章'"  href="/info/catalog/read"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 20" :title="'第' + (n+20) + '章'" />
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="intr" >
            <p>文化大革命如火如荼进行的同时，军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……四光年外，“三体文明”正苦苦挣扎——三颗无规则运行的太阳主导下的百余次毁灭与重生逼迫他们逃离母星。而恰在此时，他们接收到了地球发来的信息。在运用超技术锁死地球人的基础科学之后，三体人庞大的宇宙舰队开始向地球进发……人类的末日悄然来临。
            </p>
        </div>
    </div>
 </template>
 <script>
     export default({
        data(){
            return{
                selected:true,
            }
        },
    })
 </script>
 <style>
.app-catalog{
    padding-bottom:50px;
    background:#fff;
}
div.mint-navbar{
    padding-top:50px;
    overflow:hidden;
}
.app-catalog>div{
    overflow:hidden;
}
.mint-tab-container{
    top:2px;;
}
.mint-cell-wrapper{
    border-bottom:1px solid #eee;
}
.mint-tab-container-item{
    padding:0 20px;
}
.app-catalog .mint-header{
	background-color:#eee;
    color:#555;
}
.mint-navbar>div{
    line-height:46px;
    padding-left:30px;
    font-size:14px;
}
.app-catalog .intr{
    padding:50px 40px;
}
.app-catalog div.intr>p{
    text-indent: 2em;
    line-height:30px;
    color:#555;
    font-size:16px;
    letter-spacing:2px;
}
 </style>