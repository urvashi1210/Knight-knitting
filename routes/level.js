const router = require("express").Router();
const geoip = require("geoip-lite");
const update_user = require("../utils/update_user");

// Level-1
router.get("/1", (req, res) => {
    res.redirect("/level/1/DoorOpen");
});

router.get("/1/:id", (req, res) => {
    const { email, level } = req.user;
    const { id } = req.params;
    if (id == "DoorOpen") res.render("levels/1");
    else if (id == "DoorClose") update_user(email, level).then(() => res.redirect("/level/" + (level + 1)));
    else res.redirect("/level/1/DoorOpen");
});

// Level-2
router.get("/2", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.query;
    if (ans == "unknot") update_user(email, level).then(() => res.redirect("/level/" + (level + 1)));
    else res.render("levels/2");
});

// Level-3
router.get("/3", (req, res) => {
    res.render("levels/3");
});

router.post("/3", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "macabre") update_user(email, level).then(() => res.end());
    else res.redirect("/level/3");
});

// Level-4
router.get("/4", (req, res) => {
    res.render("levels/4");
});

router.post("/4", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "doomed") update_user(email, level).then(() => res.end());
    else res.redirect("/level/4");
});

// Level-5
router.get("/5", (req, res) => {
    res.render("levels/5");
});

router.post("/5", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "yes i have voted") update_user(email, level).then(() => res.end());
    else res.redirect("/level/5");
});

// Level-6
router.get("/6", (req, res) => {
    res.render("levels/6");
});

router.post("/6", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "77") update_user(email, level).then(() => res.end());
    else res.redirect("/level/6");
});

// Level-7
router.get("/7", (req, res) => {
    res.render("levels/7");
});

router.post("/7", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "norsemen") update_user(email, level).then(() => res.end());
    else res.redirect("/level/7");
});

// Level-8
router.get("/8", (req, res) => {
    const { email, level } = req.user;
    const { count } = req.query;
    if (count == "2214") update_user(email, level).then(() => res.redirect("/level/" + (level + 1)));
    else res.render("levels/8");
});

// Level-9
router.get("/9", (req, res) => {
    res.render("levels/9");
});

router.post("/9", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "annabelle") update_user(email, level).then(() => res.end());
    else res.redirect("/level/9");
});

// Level-10
router.get("/10", (req, res) => {
    const { email, level } = req.user;
    const { size } = req.query;
    if (size == "140201") update_user(email, level).then(() => res.redirect("/level/" + (level + 1)));
    else res.render("levels/10");
});

// Level-11
router.get("/11", (req, res) => {
    res.render("levels/11");
});

router.post("/11", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "kukluxklan(kkk)") update_user(email, level).then(() => res.end());
    else res.redirect("/level/11");
});

// Level-12
router.get("/12", (req, res) => {
    res.render("levels/12");
});

router.post("/12", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "duncan") update_user(email, level).then(() => res.end());
    else res.redirect("/level/12");
});

// Level-13
router.get("/13", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.ip;
    const geo = geoip.lookup(ip);
    res.render("levels/13", { form: geo ? geo.timezone.startsWith("Europe") : false });
});

router.post("/13", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "blackdeath") update_user(email, level).then(() => res.end());
    else res.redirect("/level/13");
});

// Level-14
router.get("/14", (req, res) => {
    const { location } = req.query;
    res.render("levels/14", { morse: location === "hoiabaciu" });
});

router.post("/14", (req, res) => {
    const { email, level } = req.user;
    const { ans } = req.body;
    if (ans == "sleepyhollows") update_user(email, level).then(() => res.end());
    else res.redirect("/level/14");
});

// Level-15
router.get("/15", (req, res) => {
    const { email, level } = req.user;
    const { king } = req.query;
    if (king == "tutankhamun") update_user(email, level).then(() => res.redirect("/level/" + (level + 1)));
    else res.render("levels/15");
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (id > 15) res.redirect("/dashboard");
    else res.render("levels/" + id);
});

module.exports = router;
