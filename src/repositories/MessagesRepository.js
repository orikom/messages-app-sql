const Message = require('../models/messageModel');

const addNewMessageToDB = async(reqBody) => {
  try{
    const addedMessage = await Message.create(reqBody);
    return addedMessage;
  } catch(err){
    throw new Error('failed to add new message to db');
  }
}

const getAllMessagesFromDB = async () => {
  try{
    // const allMessagesFromDB = await Message.find({})
    const allMessagesFromDB = await Message.findAll()
    return allMessagesFromDB;
  } catch (err){
    throw new Error('failed to fetch messages from db');

  }
}

module.exports = {
  addNewMessageToDB,
  getAllMessagesFromDB
}

