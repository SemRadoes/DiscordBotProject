module.exports = {
    name: "hello",
    description: "reply to hello",
    execute(message){
        message.channel.send("Hi there, what can i do for you?");
    }
}