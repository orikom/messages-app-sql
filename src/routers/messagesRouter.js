const express = require('express');
const MessagesController = require('../controllers/messagesController');
const messagesRouter = new express.Router();

messagesRouter.post('/messages/new', MessagesController.newMessage);
messagesRouter.get('/messages', MessagesController.getAllMessages);
messagesRouter.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = messagesRouter;