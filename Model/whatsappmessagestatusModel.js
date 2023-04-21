const mongoose=require("mongoose")

const messageSchema = new mongoose.Schema({
    Id: String,
    Display_phone_number: String,
    Phone_id: String,
    Sender_name: String,
    Wa_id: String,
    Sender_phone: String,
    Message_id: String,
    Timestamp: String,
    Body: String
  });

  const MessageModel = mongoose.model('whatsappmessage', messageSchema);

module.exports = MessageModel;