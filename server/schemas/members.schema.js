const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible');
const MemberSchema = new mongoose.Schema({
    
    userID: { type: String },
    userName : {type: String},
    psasword : {type: String},
    email :    {type: String},
    firstName : {type: String},
    sureName : {type: String},
    birthDate : {type: Date},
    userSpeace : {type: String},
    isVisible : {type: Boolean, default: true},
    Admingroup : {type: Boolean, default: false}, // admin or user 
    createdAt : {type: Date}
})


const populate = []

const Members = mongoose.model('Members', MemberSchema,'Members');
module.exports = Members ; 


