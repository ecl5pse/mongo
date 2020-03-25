const Chat = require('../model/Chat.js');

module.exports.findChatById = async (req, res, next) => {
  req.chat = await Chat.findById(req.params.chatId);

  if (req.chat) {
    return next();
  }
  return res.status(404).send('Chat Not Found');
};