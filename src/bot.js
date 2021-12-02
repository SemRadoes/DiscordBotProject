const discord = require("discord.js");

const config = require("./data/config.json");

const intents = new discord.Intents("32767");

const client = new discord.Client({ intents });

client.on("ready", () => console.log("i am ready master"));

client.on("messageCreate", message => {
    // console.log(message.content);
    if(message.content === "Hello".toLocaleLowerCase()) message.reply("Hi there, what can i do for you?");
});


client.login(config.token);

