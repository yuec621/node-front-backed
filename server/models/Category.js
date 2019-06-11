const mongose=require('mongoose')
const schema=new mongose.Schema({
    name:{type:String}
})
module.exports=mongose.model('Category',schema)