const router = require("express").Router();
const passport = require("passport");
const { ensureAuth } = require("../middleware/auth");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { successRedirect: "/dashboard", failureRedirect: "/" }));

router.post("/logout", ensureAuth, function(req, res) {
    req.logout(function(err) {
        if (err) {
            console.log(err);
        }
    res.redirect("/");
    });
});

module.exports = router;
