# Night Knitting

Night Knitting is an online event that will run for 48 hours during the college fest, [Zealicon](https://zealicon.in). It is a puzzle game that would require problem-solving skills and an understanding of front-end web technologies. Users will progress through the levels by analyzing hints and the HTML code.

## Steps to setup for development:

-   Run `yarn` to install all the dependencies.
-   Run `cp env.template .env` and insert the required values.
-   Run `yarn dev` to start the server.

## Steps to setup for production:

-   Run `yarn --prod` to install all the dependencies.
-   Run `cp env.template .env` and insert the required values.
-   Run `sudo pm2 start pm2.config.js`
