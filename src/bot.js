const discord = require("discord.js");

const config = require("./data/config.json");

const intents = new discord.Intents("32767");

const client = new discord.Client({ intents });

const ps = require("prompt-sync");
const prompt = ps();

client.on("ready", () => console.log("i am ready master"));

client.on("messageCreate", message => {
    messageList = ["!Hello", "!How are you?", "!How old are you?"];

    for (value of messageList){
        switch(value.content.toLowerCase()){
            case `${value.substring(1)}`:
                return message.reply("your message should start with '!' ");
            case `${value}`:
                return message.reply("Hi there, what can i do for you?");
            default:
                return;
        }
    }
    // if(message.content.toLowerCase() === `hello`){
    //     return WrongMessageReply;
    // } else if (message.content.toLowerCase() === `!hello`){
    //     message.reply("Hi there, what can i do for you?");
    // } else {
    //     return;
    // }
    // const args = message.content.substring(config.prefix.length).split(/ +/);
    
});


client.login(config.token);

