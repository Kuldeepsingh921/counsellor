const mongoose=require("mongoose")

const CounsellorLeadsSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:false},
    assignedto:{type:String,required:false},
    phoneno:{type:String,required:false},
    enquirydate:{type:String,required:false},
    followupdate:{type:String,required:false},
    lastcontacted:{type:String,required:false},
    status:{type:String,required:false},
    course:{type:String,required:false},
    notes:{type:[String],required:true},
    userId:{type:String,required:true}
})

const CounsellorModel=mongoose.model("counselllorleads",CounsellorLeadsSchema)


module.exports=CounsellorModel