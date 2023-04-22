const User = require("../models/User");

module.exports = (email) =>
    new Promise((resolve, reject) =>
        User.findOne({ email }, { level: 1, score: 1 }, async (err, user) => {
            if (err) reject(err);
            user.score += 5 * user.level;
            user.level++;
            await user.save();
            resolve();
        })
    );
