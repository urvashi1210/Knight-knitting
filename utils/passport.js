const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

module.exports = (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/auth/google/callback"
            },
            (accessToken, refreshToken, profile, done) =>
                User.findOne({ email: profile.emails[0].value }, { _id: 0, __v: 0, date_created: 0 }, async (err, user) => {
                    if (err) return done(err, false);
                    const data = {
                        gid: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        avatar: profile.photos[0].value,
                        level: user ? user.level : 1
                    };

                    if (!user) await new User(data).save();
                    return done(null, data);
                })
        )
    );
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));
};
