const mongoose=require("mongoose")

const messagestatusSchema = new mongoose.Schema({
    Id: {type:String,required:true},
    Display_phone_number: {type:String,required:true},
    Phone_id: {type:String,required:true},
    Sender_name: {type:String,required:true},
    Wa_id: {type:String,required:true},
    Sender_phone:{type:String,required:true},
    Message_id: {type:String,required:true},
    Timestamp: {type:String,required:true},
    Body: {type:String,required:true},
  });

  const MessageStatusModel = mongoose.model('messagestatus', messagestatusSchema);

module.exports = MessageStatusModel;