const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible');
const uploadedfilesSchema = new mongoose.Schema({

    fileID : {type: String},
    userID : {type: mongoose.Schema.Types.ObjectId , ref:'Members'},
    fileName : {type: String},
    file : {type: String},
    size : {type: String},
    downloadNum : {type: String},
    fileType : {type: String},
    isVisible : {type: Boolean, default: true},
    uploadedAt : {type: Date}
})


const population = [{
    path : 'userID',
    match : {isVisible: true}
}]
uploadedfilesSchema.pre('find', findVisible(population));
uploadedfilesSchema.pre('findOne', findVisible(population));
uploadedfilesSchema.pre('findOneAndUpdate', findVisible());
uploadedfilesSchema.pre('count', findVisible());
uploadedfilesSchema.pre('countDocments', findVisible());

uploadedfilesSchema.plugin(deepPopulate,{})

const Uploadedfiles = mongoose.model('Uploadedfiles', uploadedfilesSchema,'Uploadedfiles');
module.exports = Uploadedfiles ; 
