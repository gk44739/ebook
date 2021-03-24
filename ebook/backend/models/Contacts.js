const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    Email:String,
    Subject:String,
    Message:String,
    updatedDate:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Contacts',ContactSchema);

