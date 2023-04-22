const fs = require("fs");
let env_file = fs.readFileSync(".env", "utf8");
env_file = env_file.split("\n");
env_file.pop();
let env = {};
env_file.forEach((row) => (env[row.split("=")[0]] = row.split("=").slice(1).join("=")));

module.exports = {
    apps: [
        {
            name: "NightKnitting",
            script: "index.js",
            env: {
                ...env,
                NODE_ENV: "production",
                PORT: 6000
            }
        }
    ]
};
