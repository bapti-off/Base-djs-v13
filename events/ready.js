const client = require("../index");
const config = require("../config.json");
const chalk = require("chalk");

client.on("ready", () => {
  console.log(
    chalk.bgWhite.red(`✅ Connect successfully on ${client.user.username}`)
  );
});


//FlyHArt//
