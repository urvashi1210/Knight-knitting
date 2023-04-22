const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    gid: String,
    name: String,
    email: String,
    avatar: String,
    level: Number,
    score: { type: Number, default: 0 },
    date_created: { type: String, default: new Date().toUTCString() }
});

module.exports = mongoose.model("users", UserSchema);
