const discord = require("discord.js");

const config = require("./data/config.json");

const fs = require("fs");
const { fileURLToPath } = require("url");

const intents = new discord.Intents("32767");

const client = new discord.Client({ intents });

client.commands = new discord.Collection();

const commandFiles = fs
	.readdirSync("./commands/")
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.command.set(command.name, command);
}

client.on("ready", () => {
	console.log("i am ready master");
});
const file = "./src/bot.js";
const dateCreated = fs.statSync(file).birthtime;
client.on("messageCreate", (message) => {
	// no prefix!
	if (!message.content.startsWith(config.prefix) || message.author.bot)
		return;

	// advanced questions!
	let returnMessage = "";
	if (message.content.startsWith("!say")) {
		const arrayOfCommand = message.content.split(" ");
		const restOfSayMessage = arrayOfCommand.slice(1);
		returnMessage += restOfSayMessage.join(" ");
	}

	switch (message.content.toLowerCase()) {
		case `!say ${returnMessage}`:
			client.commands
				.get("repeatMessage")
				.execute(message, returnMessage);
		// return message.reply(returnMessage);

		case "!hello":
			client.commands.get("hello").execute(message, args);
		// return message.reply("Hi there, what can i do for you?");
		case "!how are you?":
			client.command.get("How are you").execute(message, args);
		// return message.reply("I'm very good, thank you. and you?");

		case "!when were you created?":
			client.command.get("dateCreated").execute(message, dateCreated);
		// return message.reply(`I was created ${dateCreated}`);
		default:
			return;
	}
});

client.login(config.token);
