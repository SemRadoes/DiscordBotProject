const discord = require("discord.js");

const config = require("./data/config.json");

const fs = require('fs');

const intents = new discord.Intents("32767");

const client = new discord.Client({ intents });

client.on("ready", () => console.log("i am ready master"));

const file = "./src/bot.js";
const dateCreated = fs.statSync(file).birthtime;
client.on("messageCreate", message => {

    // no prefix!
    if(!message.content.startsWith(config.prefix)) return;
    let returnMessage = "";
    // advanced questions!
    if(message.content.startsWith("!say")){
        const arrayOfCommand = message.content.split(" ");
        const restOfSayMessage = arrayOfCommand.slice(1);
        returnMessage += restOfSayMessage.join(" ");
    }
    
    switch(message.content.toLowerCase()){
        case `!say ${returnMessage}`:
            return message.reply(returnMessage);
            
        case "!hello":
            return message.reply("Hi there, what can i do for you?");
            
        case "!how are you?":
            return message.reply("I'm very good, thank you. and you?");
            
        case "!when were you created?":
            return message.reply(`I was created ${dateCreated}`);
        default:
            return;
    }
});

client.login(config.token);

