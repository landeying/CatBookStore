//app.js
//加载模块
const express=require("express");
const pool=require("./pool")
//创建express对象
var app=express();


const cors=require("cors");
app.use(cors({
    origin:["http://127.0.0.1:3002","http://localhost:3002"],
    credentials:true
}))
//指定静态目录
app.use(express.static(__dirname+"/public"))
//绑定监听事件
app.listen(3000);
app.get("/imagelist",(req,res)=>{
    var pics = [];
    var sql = " SELECT * FROM chs_index_carousel"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        pics = result
        res.send(pics)
    })
   
});

app.get("/login",(req,res)=>{
    //1:参数 2 uname upwd
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    //2:正则表达式验证 
    //3:sql 
    var sql = " SELECT count(uid) as c FROM chs_user";
        sql +=" WHERE uname=? AND upwd = md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
          if(err)throw err;
          if(result[0].c==0){
            res.send({code:-1,msg:"用户名或密码错误"});
          }else{
            res.send({code:1,msg:"登录成功"});
          }
    })
  
  });

app.get("/iconlist",(req,res)=>{
    var obj = [
        {id:1,icon_name:"精选",icon_url:"http://127.0.0.1:3000/img/icon/chioceness.png"},
        {id:2,icon_name:"女生",icon_url:"http://127.0.0.1:3000/img/icon/girl.png"},
        {id:3,icon_name:"男生",icon_url:"http://127.0.0.1:3000/img/icon/boy.png"},
        {id:4,icon_name:"免费",icon_url:"http://127.0.0.1:3000/img/icon/free.png"},
        {id:5,icon_name:"书店",icon_url:"http://127.0.0.1:3000/img/icon/bookstore.png"},
    ];
    res.send(obj)
})

app.get("/chimglist",(req,res)=>{
    var obj = [
        {id:1,content:"但遇主角，就地为冢",chimg_url:"http://127.0.0.1:3000/img/chome/005QNrjkgy1fl18smrovwj305k07sjt6.jpg"},
        {id:2,content:"与你朝朝暮暮。",chimg_url:"http://127.0.0.1:3000/img/chome/006E6vgDgy1fteayggaakj30b40fk77w.jpg"},
        {id:3,content:"治愈他，得到他",chimg_url:"http://127.0.0.1:3000/img/chome/006QYpWhly1fv45dh5f20j316o1kwauv.jpg"},
        {id:4,content:"重返十七岁",chimg_url:"http://127.0.0.1:3000/img/chome/646d61f8gy1fl5uymg68gj20j60quabj.jpg"},
        {id:5,content:"回到民国当文豪",chimg_url:"http://127.0.0.1:3000/img/chome/8129d5bdly1fwjki7c95vj205k07s40k.jpg"},
        {id:6,content:"巧取豪夺狗血文",chimg_url:"http://127.0.0.1:3000/img/chome/ec177d77gy1fw8r884jrnj20b40fk0vc.jpg"},
    ];
    res.send(obj)
})