module.exports = {
    name: "file creation date",
    description: "when was the file created",
    execute(message, dateCreated){
        message.channel.send(`I was created ${dateCreated}`);
    }
}