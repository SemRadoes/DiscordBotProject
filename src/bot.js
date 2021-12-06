const discord = require("discord.js");

const config = require("./data/config.json");

const fs = require('fs');

const intents = new discord.Intents("32767");

const client = new discord.Client({ intents });

client.on("ready", () => console.log("i am ready master"));

// let today = new Date();
// let date = `${today.getDay()} ${today.getMonth()} ${today.getFullYear()}`;
// const file = "C:\Users\semra\Documents\Projects to learn\First Discord Bot\DiscordBotProject\src";
// const dateCreated = fs.statSync(file).birthtime;
client.on("messageCreate", message => {

    // no prefix!
    if(!message.content.startsWith(config.prefix)) return;

    // advanced questions!
    const repeatMe = message.content.split(" ");
    switch(message.content.toLowerCase()){
        case "say":
            message.reply(repeatMe.splice(1));
            break;
        case "hello":
            message.reply("Hi there, what can i do for you?");
            break;
        case "how are you?":
            message.reply("I'm very good, thank you. and you?");
            break;
        // case `!When were you created?`:
        //     return message.reply(`I am created ${dateCreated}`);
        default:
            return;
    }
});

client.login(config.token);

