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

function login() {
    bot.chat(`/login ${accountPass}`)
    bot.chat('/8b8t')
}

function initBot() {
    bot = mineflayer.createBot(OPTIONS);
    login()
  
    bot.on("end", function () {
      setTimeout(() => {
        initBot();
        login()
      }, 6 * 1000);
    });
  }

async function dupe() {
    await sleep(cmdCooldown * 1000)
    bot.mount(bot.nearestEntity((entity) => entity.name === "donkey"))
    await sleep(4 * 1000)
    bot.quit()
    await sleep(1 * 1000)
    bot.dismount(bot.nearestEntity((entity) => entity.name === "donkey"))
}

async function longdupe() {
    await sleep(cmdCooldown * 1000)
    bot.mount(bot.nearestEntity((entity) => entity.name === "donkey"))
    await sleep(4 * 1000)
    bot.quit()
    await sleep(1 * 1000)
    bot.dismount(bot.nearestEntity((entity) => entity.name === "donkey"))
    longdupe()
}
initBot()

bot.on('chat', async(username, message) => {
    if(message==='!dupe') {
        dupe()
    }
    if(message==='!endlessdupe') {
        longdupedupe()
    }
    if(message==='!dismount') {
        bot.dismount(bot.nearestEntity((entity) => entity.name === "donkey"))
    }
})
