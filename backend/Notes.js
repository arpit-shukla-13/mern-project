const mongoose  = require('mongoose');
const adminnotesSchema = mongoose.Schema(
    {
        "topic":String,
        "subtopic":String,
        "content":String,
        "addby":String
    }
);
module.exports = mongoose.model('note',adminnotesSchema);