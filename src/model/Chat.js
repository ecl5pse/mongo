const db = require('../db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

const messageSchema = new Schema({
                                   authorId: {
                                     type: Schema.Types.ObjectId,
                                     ref: 'Chat',
                                   },
                                   type: Schema.Types.String,
                                 })


const chatSchema = new Schema({

                                name: {
                                  type: Schema.Types.String,
                                  minLength: 4,
                                  maxLength: 20,

                                },
                                owner: {
                                  type: Schema.Types.ObjectId,
                                  ref: 'User',

                                },
                                participants: [
                                  {
                                    type: Schema.Types.ObjectId,
                                    ref: 'User',
                                    unique: true,
                                  },

                                ],

                                messages: [String]
                              })
;

const Chat = db.model('Chat', chatSchema);
module.exports = Chat;