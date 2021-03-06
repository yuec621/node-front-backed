const express=require("express")
const app=express()
app.use(require('cors')())//跨域
app.use(express.json())
app.use('/uploads',express.static(__dirname+'/uploads'))
require('./plugins/db')(app)
require('./routes/admin')(app)
app.listen(4000,()=>{
    console.log('http://localhost:4000')
})