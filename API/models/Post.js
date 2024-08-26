const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const PostSchema = new Schema({
  title:String,
  summary:String,
  time:String,
  date: {
    type: Date,
    default: Date.now
  }
}, {});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;