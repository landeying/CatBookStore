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
    var obj = {};
    var sql = "SELECT fid,fname,fimg FROM chs_family"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        obj = result
        res.send(obj)
    })
})
//首页分类切换
app.get("/book",(req,res)=>{
    var fid = req.query.fid
    var obj = []
    var obj1 = []
    var sql = " SELECT aid,id,subtitle FROM chs_book WHERE fid = ?"
    var sql1 = "SELECT img FROM chs_pic WHERE fid=?"
    new Promise(function(open){
            pool.query(sql,[fid],(err,result)=>{
                if(err) throw err
                obj= result;
                open()
                console.log("查询book完成")
            })
        }).then(function(){
        new Promise(function(open){
            pool.query(sql1,[fid],(err,result)=>{
                if(err) throw err
                for(var i=0;i<result.length;i++){
                    for(var j=0;j<obj.length;j++){
                         if(i==j){
                             obj1.push(Object.assign(obj[j],result[i]))
                         }
                     }
                   }
                open()
                res.send(obj1)
                console.log("查询图片完成")
            })
        })
    })
})

//加载更多
app.get("/getbooklist",(req,res)=>{
    var pno = req.query.pno //当前页码
    var pageSize = req.query.pageSize //一页显示几行数据
    var sql = " SELECT count(id) as c FROM chs_book"//查找总记录数，转换成页数
    var obj = {}    //保存发送客户端数据
    var progress = 0  //进度
    pool.query(sql,(err,result)=>{
        if(err) throw err
        var c = Math.ceil(result[0].c/pageSize)
        obj.pageCount = c
        progress += 50
        if(progress == 150){
            res.send(obj);
        }
    })
    var sql = " SELECT id,bname,subtitle FROM chs_book LIMIT ?,?"
    var sql1 = "SELECT img FROM chs_pic LIMIT ?,?"
    var offset = parseInt((pno-1)*pageSize) //计算分页偏移量
    pageSize = parseInt(pageSize)
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err
        obj.data = result;
        progress += 50
        if(progress == 150){
            res.send(obj);
        }
    })
    pool.query(sql1,[offset,pageSize],(err,result)=>{
        if(err) throw err
        obj.img = result
        progress += 50
        if(progress == 150){
            res.send(obj);
        }
    })
    
})
//书籍详细信息
app.get("/getbookinfo",(req,res)=>{
    var id =req.query.id
    var obj=[]
    var obj1 = []
    var sql = " SELECT * FROM chs_book WHERE id=?"
    var sql1 = "SELECT img FROM chs_pic WHERE id=?"
     new Promise(function(open){
        pool.query(sql,[id],(err,result)=>{
            if(err) throw err
            obj= result;
            open()
            console.log("查询book完成")
            })
        }).then(function(){
        new Promise(function(open){
            pool.query(sql1,[id],(err,result)=>{
                if(err) throw err
                for(var i=0;i<result.length;i++){
                    for(var j=0;j<obj.length;j++){
                         if(i==j){
                             obj1.push(Object.assign(obj[j],result[i]))
                         }
                     }
                   }
                open()
                res.send(obj1)
                console.log("查询图片完成")
            })
        })
    })
})
//发表评论
const qs = require("querystring");
app.post("/postcomment",(req,res)=>{
    req.on("data",(buf)=>{
        var str = buf.toString();  //1:将参数转字符串
        var obj = JSON.parse(str); //2:将参数转对象
        var msg = obj.msg;         
        var uid = parseInt(obj.uid);
        console.log(obj.nid)
        var sql = "INSERT INTO chs_comment(content,uname,ctime,uid) VALUES(?,'匿名',now(),?)";
        pool.query(sql,[msg,uid],(err,result)=>{
            if(err)throw err;
             res.send({code:1,msg:"添加成功"});
     })
    })
})
//用户获取指定编号所有评论
//分页显示
app.get("/booklist",(req,res)=>{
    var sql = " SELECT id,bname,subtitle FROM chs_book LIMIT ?,?"
    var offset = parseInt((pno-1)*pageSize) //计算分页偏移量
    pageSize = parseInt(pageSize)
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err
        obj.data = result
        progress += 50
        if(progress == 100){
            res.send(obj);
        }
    })
})
 //分区显示
 app.get("/area",(req,res)=>{
     var area = {}
     var sql = "SELECT aid,aname FROM chs_area_family"
     pool.query(sql,(err,result)=>{
         if(err) throw err
         area = result
         res.send(area)
     })  
 }) 
 //搜索排行
 app.get("/search",(req,res)=>{
     var obj = []
     var sql = "SELECT id,bname FROM chs_book"
     pool.query(sql,(err,result)=>{
         if(err) throw err
         obj = result
         res.send(obj)
     })
 })

