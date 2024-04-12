const mongoose  = require('mongoose');
const userSchema = mongoose.Schema(
    {
        "name":String,
        "email":String,
        "contact":Number,
        "password":String,
        "address":String
    }
);
module.exports = mongoose.model('user',userSchema);