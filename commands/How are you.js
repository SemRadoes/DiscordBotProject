module.exports = {
    name: "how are you?",
    description: "reply to 'how are you?'",
    execute(message){
        message.channel.send("I'm very good, thank you. and you?");
    }
}