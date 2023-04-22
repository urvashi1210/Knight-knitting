const router = require("express").Router();
const passport = require("passport");
const { ensureAuth } = require("../middleware/auth");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { successRedirect: "/dashboard", failureRedirect: "/" }));

router.post("/logout", ensureAuth, (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;
