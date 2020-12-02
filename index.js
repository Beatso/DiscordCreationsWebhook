// require dependencies
const Discord = require("discord.js")
const dotenv = require("dotenv")

// set up dotenv
dotenv.config()

// set up discord client
const client = new Discord.Client()
client.login(process.env.bottoken)

// set up webhook
const webhookID = process.env.webhookurl.substr(33, 18)
const webhookToken = process.env.webhookurl.substr(52, 68)
const creationsWebhook = new Discord.WebhookClient(webhookID, webhookToken)

// log when bot is running
client.once("ready", () => console.log("bot running"))

// move messages
client.on("message", message => {

	if (
		message.channel.id!=process.env.creationschannelid || // the message is not in community creations
		message.author.id==client.user.id || // the message was sent my the bot
		message.attachments.length>0 || // there is an attachment
		message.content.includes("http://") || // there is a link
		message.content.includes("https://") // there is a link

	) return
	
	message.delete()
	message.reply(`your message was deleted because it didn't have an attachment, image or link. Please use <#${process.env.discussionchannelid}> for talking about creations posted in this channel.`).then(response=>response.delete({timeout:15000}))

	if (message.member.nickname==null) name = message.author.username
	else name = message.member.nickname

	creationsWebhook.send(message.content, { username: name, avatarURL: message.author.avatarURL({dynamic:true}) } )

})

// server to keep alive
const server = require("express")()
server.all("/", (req, res) => res.send("kept alive"))
server.listen(3000, () => console.log("server running"))
