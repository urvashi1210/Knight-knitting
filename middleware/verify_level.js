const User = require("../models/User");

module.exports = {
    verifyLevel: (req, res, next) =>
        User.findOne({ email: req.user.email }, { _id: 0, level: 1 }, (err, user) => {
            if (err) return res.status(500).end();
            if (user.level != req.path.split("/")[1]) return res.redirect("/level/" + user.level);
            req.user.level = user.level;
            next();
        })
};
