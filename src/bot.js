const discord = require("discord.js");

const config = require("./data/config.json");

const fs = require("fs");
const { isArgumentsObject } = require("util/types");

const intents = new discord.Intents("32767");

const client = new discord.Client({ intents });

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
	console.log("i am ready master");
});
const file = "./src/bot.js";
const dateCreated = fs.statSync(file).birthtime;
client.on("messageCreate", (message) => {
	// no prefix!
	if (!message.content.startsWith(config.prefix) || message.author.bot) {
		return;
	}
	
	let returnMessage = "";
	if (message.content.startsWith("!say")) {
		const arrayOfCommand = message.content.split(" ");
		const restOfSayMessage = arrayOfCommand.slice(1);
		returnMessage += restOfSayMessage.join(" ");
	}
	// advanced questions!
	
	switch (message.content.toLowerCase()) {
		case `!say ${returnMessage}`:
			return client.commands.get("say").execute(message, returnMessage);

		case "!hello":
			return client.commands.get("hello").execute(message);

		case "!how are you?":
			return client.commands.get("how are you?").execute(message);

		case "!when were you created?":
			return client.commands.get("file creation date").execute(message, dateCreated);
		
		case "!play":
			return client.commands.get("play").execute(message);
		
		default:
			return;
	}
});

client.login(config.token);
