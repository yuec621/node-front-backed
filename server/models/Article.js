const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:{type:String},
    parent:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Article'
    }
})
module.exports=mongoose.model('Article',schema)