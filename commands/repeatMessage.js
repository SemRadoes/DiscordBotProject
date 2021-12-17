module.exports = {
    name: "say",
    description: "repeat the message",
    execute(message, returnMessage){
        message.channel.send(returnMessage);
    }
}