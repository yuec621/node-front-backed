const express=require("express")
const app=express()
app.use(require('cors')())//跨域

// app.post('/admin/api/test',(req,res)=>{
   //如果有跨域问题 加这个
   // res.header('Access-Control-Allow-Origin', '*');
      //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  //  res.header('Access-Control-Allow-Headers', 'Content-Type');
   // res.header('Access-Control-Allow-Methods', '*');
   // res.header('Content-Type', 'application/json;charset=utf-8');
    
//     res.json({name:'我的跨域2'})
// })
// app.listen(4000)


app.use(express.json())
require('./plugins/db')(app)
require('./routes/admin')(app)
app.listen(4000,()=>{
    console.log('http://localhost:4000')
})