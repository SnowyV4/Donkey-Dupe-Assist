const mineflayer = require("mineflayer");
const { promisify } = require('util')
const sleep = promisify(setTimeout)

const OPTIONS = {
    host: "8b8t.me", //
    username: "D0nkeyDupe", // put in ur cracked account's username
    port: '25565',
    version: '1.20.1'
};
const accountPass = '' // PUT UR ACCOUNT PASSWORD HERE
const cmdCooldown = 3; //how long it will wait to dupe for after the command. this is in seconds

let bot


function initBot() {
    bot = mineflayer.createBot(OPTIONS);
  
    bot.on("end", function () {
      setTimeout(() => {
        initBot();
        bot.dismount()
      }, 6 * 1000);
    });
  }
  initBot()
async function dupe() {
    await sleep(cmdCooldown * 1000)
    bot.mount(bot.nearestEntity((entity) => entity.name === "donkey"))
    await sleep(4 * 1000)
    bot.quit()
}

async function longdupe() {
    await sleep(cmdCooldown * 1000)
    bot.mount(bot.nearestEntity((entity) => entity.name === "donkey"))
    await sleep(4 * 1000)
    bot.quit()
    longdupe()
}

bot.on('chat', async(username, message) => {
    if(message==='!dupe') {
        dupe()
    }
    if(message==='!endlessdupe') {
        longdupedupe()
    }
    if(message==='!dismount') {
        bot.dismount()
    }
})
