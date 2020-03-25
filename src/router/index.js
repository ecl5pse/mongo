const express = require('express');
const {postUser , getUser , deleteUser , updateUser} = require('../controller/user.controller');
const {findChatById} = require('../middleware');
const {joinToChat , createChat , getChat , createMessage} = require('../controller/chat.controller.js');


const router = express.Router();


router.route('/user(/:id)?').
       post(postUser).
       get(getUser).
       put(updateUser).
       delete(deleteUser);

router.route('/chat(/:chatId)?').
       get(getChat).
       post(createChat);

router.route('/chat/:chatId/participants').post(
    findChatById,
    joinToChat);


router.route('/chat/:chatId/message(/:messageId)').
       post(createMessage)

module.exports = router;