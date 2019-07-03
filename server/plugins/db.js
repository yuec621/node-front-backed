module.exports=app=>{
    const mongoose=require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-moba-vue',{
        useNewUrlParser:true
    },function (err,client) {
        if (err) {
            console.error('数据库连接失败')
            return
        } else {
            console.log('数据库连接成功')
        }
    })
}