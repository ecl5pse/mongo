const User = require('../model/User.js');


module.exports.postUser = async (req, res, next) => {
    try {
      const user = new User(req.body);
      const newUser = await user.save();
      if (newUser) {
        return res.status(201).send(newUser);
      }

      res.status(400).send('Bad request');

    } catch (e) {
      next(e);
    }
};
module.exports.getUser = async (req, res, next) => {
  try{
    const user = await User.findById(req.parms.id, {
      __v:false,
    });
    if (user){
      return res.send('Not found ');
    }
    res.status(404).send('Not found')
  }catch (e) {
    next(e)
  }

};
module.exports.updateUser = async (req, res, next) => {

  try{
    const {params:{id}, body} = req;
    const updatedUser = await User.findByIdAndUpdate(id, body, {new: true});
    if (updatedUser) {
      return res.send(updatedUser);
    }

    res.status(400).send('Bad request');
  }catch (e) {
    next(e)
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {params: {id}} = req;

    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      return res.send(deletedUser);
    }

    res.status(404).send('Not found');

  } catch (e) {
    next(e);
  }
};
