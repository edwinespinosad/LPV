const {Schema, mongoose} = require('mongoose');

const userSchema = new Schema({
    name: {type: String},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);