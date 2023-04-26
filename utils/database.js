const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, { dbName: process.env.MONGO_DB, useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("Database connected...");
});
