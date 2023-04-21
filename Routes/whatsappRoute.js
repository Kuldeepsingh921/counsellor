const express = require('express');

const app = express.Router();

const Message = require('../Model/whatsappmessageModel');
const MessageStatus = require('../Model/whatsappmessagestatusModel');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/message', (req, res) => {
  const data = req.body;

  if (data && data.object === 'whatsapp_business_account') {
    const entry = data.entry[0];
    const changes = entry.changes[0];
    const value = changes.value;

    if (value.messages) {
      // Messages received table
      const message = value.messages[0];
      const { id, metadata, contacts } = value;
      const { name: senderName } = contacts[0].profile;
      const { wa_id: waId } = contacts[0];
      const { from: senderPhone, id: messageId, timestamp: time, text: { body } } = message;

      // Prepare the message data to be saved in MongoDB
      const messageData = {
        id,
        displayPhoneNumber: metadata.display_phone_number,
        phoneId: metadata.phone_number_id,
        senderName,
        waId,
        senderPhone,
        messageId,
        time,
        body,
      };

      // Save the message data in MongoDB
      Message.create(messageData)
        .then((message) => console.log(`Message saved: ${message}`))
        .catch((err) => console.log(`Error saving message: ${err}`));
    } else if (value.statuses) {
      const status = value.statuses[0];
      if (status.status === 'read') {
        // Messages read status table
        const { id, metadata, statuses } = value;
        const { id: messageId, timestamp, recipient_id: receiverId } = statuses[0];

        // Prepare the message status data to be saved in MongoDB
        const messageStatusData = {
          id,
          displayPhoneNumber: metadata.display_phone_number,
          phoneId: metadata.phone_number_id,
          messageId,
          status: status.status,
          timestamp,
          receiverId,
        };

        // Save the message status data in MongoDB
        MessageStatus.findOneAndUpdate(
          { messageId },
          messageStatusData,
          { upsert: true, new: true },
        )
          .then((messageStatus) => console.log(`Message status saved: ${messageStatus}`))
          .catch((err) => console.log(`Error saving message status: ${err}`));
      } else {
        //... handle other status types here
      }
    } else if (value.message_statuses) {
      //... handle message statuses here
    } else {
      //... handle other entry types here
    }
  } else if (req.query && req.query['hub_challenge']) {
    res.send(req.query['hub_challenge']);
  } else {
    res.send('Invalid request');
  }
});


module.exports=app



