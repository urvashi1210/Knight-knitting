const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res) => {
    User.find({}, { _id: 0, name: 1, email: 1, score: 1 }, (err, users) => {
        if (err) return res.status(500).send(err);
        users.sort((a, b) => b.score - a.score);
        res.render("leaderboard", { data: users });
    });
});

module.exports = router;
