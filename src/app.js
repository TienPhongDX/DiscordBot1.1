require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "REACTION"] });
const embed = new Discord.MessageEmbed()
  .setTitle("Thông báo")
  .setColor(0xff0000)
  .setDescription("Đây là nội dung thông báo");

client.on("ready", () => {
  console.log("Let go baby go baby!!!");
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", (msg) => {
  if (msg.content === "bot") {
    msg.reply(" mày kêu tao ??");
  }

  if (msg.content === "hello") {
    msg.channel.send("lô con cax");
  }

  if (msg.content === "anh iu em") {
    msg.react("❤");
    msg.channel.send("iu đương con cax");
  }

  if (msg.content === "how to embed") {
    msg.channel.send(embed);
  }

  if (msg.content === "!rip") {
    const attachment = new Discord.MessageAttachment(
      "https://i.imgur.com/w3duR07.png"
    );
    msg.channel.send(attachment);
  }

  if (msg.content === "!memes") {
    const buffer = fs.readFileSync("./memes.txt");

    const attachment = new Discord.MessageAttachment(buffer, "memes.txt");
    msg.channel.send(`${msg.author}, here are your memes!`, attachment);
  }

  if (msg.content === "!mod-me") {
    msg.member.roles.add("783575899068956705");
  }
});

client.on("messageReactionAdd", (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === "783581248408518676") {
    switch (name) {
      case "🖤":
        member.roles.add("783575899068956705");
        break;
      case "🧡":
        member.roles.add("783579236769333248");
        break;
      case "💛":
        member.roles.add("783579194504380416");
        break;
      case "💚":
        member.roles.add("783579150149484574");
        break;
      case "💙":
        member.roles.add("783579112232452106");
        break;
    }
  }
});

client.on("messageReactionRemove", (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === "783581248408518676") {
    switch (name) {
      case "🖤":
        member.roles.remove("783575899068956705");
        break;
      case "🧡":
        member.roles.remove("783579236769333248");
        break;
      case "💛":
        member.roles.remove("783579194504380416");
        break;
      case "💚":
        member.roles.remove("783579150149484574");
        break;
      case "💙":
        member.roles.remove("783579112232452106");
        break;
    }
  }
});

client.login(process.env.CLIENT_TOKEN);
