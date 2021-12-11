module.exports = {
    name: "how are you?",
    description: "reply to 'how are you?'",
    execute(message, args){
        message.channel.send("I'm very good, thank you. and you?");
    }
}