// const express=require("express")

// const app=express.Router()

// const addLeadsModel=require("../Model/enquiryAddLeads")

// app.get("/",async(req,res)=>{
//     const newaddleads=await addLeadsModel.find()
//     res.send(newaddleads)
// })

// app.get("/:id",async(req,res)=>{
//   const id=req.params.id
//   const newleads=await addLeadsModel.findOne({"_id":id})
//   res.send(newleads)
// })

// app.post("/addleads",async(req,res)=>{
// const leads=await addLeadsModel.findOne({$or:[{email},{mobileno}]})
// if(leads){
//   try{
//     const newaddleads=new addLeadsModel(req.body)
//     await newaddleads.save()
//     res.send("lead is dublicated")
//  }
//  catch(err){
//    res.send("addleads are not added")
//  }
// }
//   try{
//      const newaddleads=new addLeadsModel(req.body)
//      await newaddleads.save()
//      res.send("lead is added")
//   }
//   catch(err){
//     res.send("addleads are not added")
//   }
// })

// app.patch("/:id",async(req,res)=>{
//     const id=req.params.id
//     try{
//         const newaddleads=await addLeadsModel.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
//         res.send("newLeads is updated")
//     }
//     catch(err){
//         res.send("newleads is not updated")
//     }
// })

// app.delete("/:id",async(req,res)=>{
//   const id=req.params.id

//   try{
//     const newleads=await addLeadsModel.findByIdAndDelete({"_id":id})
//     res.send("leads is deleted")
//   }
//   catch(err){
//     res.send("leads is not deleted")
//   }
// })

// module.exports=app