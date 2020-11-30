# Discord Creations Webhook

This is a code template to self host to add to your discord bot to move messages without a link or attachment (including images) from your #community-creations channel to your #creations-discussions channel.

## Example

![demo](/assets/overview.gif)

## How to use and host

You must have created a bot and invited it to your discord server. If you don't know how to do that, follow [this](https://discordpy.readthedocs.io/en/latest/discord.html) tutorial.

Create a new webhook in your #creations-discussion channel.

Follow [this link](https://repl.it/github/Beatso/DiscordCreationsWebhook) to create a new repl of this repo. Create an account if you don't already have one.

Create a new file called `.env` and give it the contents of `.env.example`.
![creating env file and pasting contents from .env.example](/assets/env.gif)

Repopulate the values with the real values of your server.  
- `webhookurl` should be the URL of the webhook you created earlier.
- `creationschannelid` and `discussionchannelid` should be the IDs of the #community-creations, and #creations-discussion channels, respectively. If you don't know how to get a channel's ID, read [this](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) support article.
- `bottoken` should be the token of the bot your created earlier. Go to the [Discord Developer Portal](https://discord.com/developers/applications), your bot's page then the Bot tab. Press Copy in the Token section, and paste it into the `.env` file.
![creating env file and pasting contents from .env.example](/assets/token.gif)

Press the Run button at the top in repl.it. If everything works correctly, a new section should appear on the page with a URL at the top. It will be something simialar to `https://DiscordCreationsWebhook.beatso1.repl.co`. Copy this.

Go to [uptimerobot.com](https://uptimerobot.com/) and create an account if you don't already have one. Then head to the [dashboard](https://uptimerobot.com/dashboard#mainDashboard) and press Add New Monitor.  
Set Monitor Type to HTTP(s).  
Give it a friendly name, such as Creations Webhook.  
Set the URL to the URL you copied earlier.  
Press Create Monitor.  

All done! Your creations webhook should be set up. If anything doesn't work as expected feel free to [open an issue](https://github.com/Beatso/DiscordCreationsWebhook/issues/new) or contact me on Discord Beatso#1815 :)
