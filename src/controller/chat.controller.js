const Chat = require('../model/Chat.js');
const User = require('../model/User.js');

module.exports.createChat = async (req, res, next) => {
  try {

    const {
      headers: {
        authorization: userId,
      },
      body,
    } = req;

    const chat = await Chat.create({
                                     ...body,
                                     owner: userId,
                                   });

    if (chat) {
      return res.status(201).send(chat);
    }

  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.joinToChat = async (req, res, next) => {
  try {
    const {
      headers: {
        authorization: userId,
      },
      chat,
    } = req;

    chat.participants.push(userId)

    const savedChat = await chat.save();
    if (savedChat) {
      const chatWithOwner = await Chat.findOne(chat).populate('owner').populate('participants')
      return res.send(chatWithOwner);
    }

    res.status(400).send('Bad request');
  }
   catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getChat = async (req, res, next) => {
  try {
    const chat = await Chat.findById(req.params.chatId).
                            populate('participants', {
                              chats: 0,
                            }).populate('own', {
          chats: 0,
        });

    res.send(chat);
  } catch (e) {
    res.send(e);
  }
};

module.exports.createMessage = async (req, res, next) => {
  try {
    const {
      headers: {
        authorization: ChatId,
      }
    } = req;

    const messages = await Message.save()

    if (messages) {
      return res.status(201).send(messages);
    }

  } catch (e) {
    next(e);
  }
};

module.exports.readMessage = async (req,res, next) =>{

}