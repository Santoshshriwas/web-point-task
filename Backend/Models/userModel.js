// const mongoose = require("mongoose");

// const userShema= mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   phone:String,
//   gender:String,
//   image:String
// })


// const User = mongoose.model("User", userShema);
// module.exports = User;


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  gender: String,
});

userSchema.statics.findByName = function(name) {
  return this.findOne({ name: new RegExp('^' + name + '$', 'i') });
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
