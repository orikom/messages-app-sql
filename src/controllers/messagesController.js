const messagesRepository = require('../repositories/MessagesRepository');

const newMessage = async(req, res) => {
  try{
    const addedMessage = await messagesRepository.addNewMessageToDB(req.body);
    res.send(addedMessage);
  } catch(err){
    res.send(`error accured: ${err}`);
  }
}

const getAllMessages = async(req, res) => {
  try{
    const allMessages = await messagesRepository.getAllMessagesFromDB();
    res.send(allMessages);
  } catch(err){
    res.send(`error accured: ${err}`);
  }
}



module.exports = {
  newMessage, 
  getAllMessages
}