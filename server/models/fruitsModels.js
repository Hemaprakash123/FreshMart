const mongoose=require('mongoose')
const fruitsSchema=mongoose.Schema({
    name:{type:String,require},
    price:{type:Number,require},
    description:{type:String,require},
    image:{type:String,require},
    category:{type:String,require}
},{
    timestamps:true,
})

const Fruit=mongoose.model('fruits',fruitsSchema)
module.exports=Fruit