const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+msgall')){ // هو البريفكس و يمكنك تغييره في أي وقت +
 if(!message.author.id === '518816831734022154') return; // حط الايدي حقك عشان تكون الوحيد الي يقدر يستخدم الأمر
message.channel.sendMessage(' جار ارسال الرسالة | ✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

          client.on('message', message => {
            var prefix = "+"; //Snow Codes
                  if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'bc')) {
        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط ل السيرفرات**').then(m => m.delete(5000));
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**`ADMINISTRATOR`أنت لا تملك خاصية **' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let copy = "ITZ Bot";
        let request = `Requested By ${message.author.username}`;
        if (!args) return message.reply('**اكتب رسالة البرودكاست**');message.channel.send(`**هل أنت متأكد من ارسال البرودكاست؟ \nالبرودكاست: ** \` ${args}\``).then(msg => { //Snow Codes
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
       
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
     reaction1.on("collect", r => {
        message.channel.send(`**☑ | عضو  __${message.guild.members.size}__ تم ارسال البرودكاست ل **`).then(m => m.delete(5000));
        message.guild.members.forEach(m => {
     
      var bc = new
           Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('Broadcast')
           .addField('🔰السيرفر🔰', message.guild.name) //Snow Codes
           .addField('🚩صاحب الرسالة🚩', message.author.username) //Snow Codes
           .addField('📜الرسالة📜', args)  //Snow Codes
           .setThumbnail(message.author.avatarURL)
           .setFooter(copy, client.user.avatarURL);
        m.send({ embed: bc })
        msg.delete();
        })
        })
        reaction2.on("collect", r => {
        message.channel.send(`**تم الغاء البرودكاست :x:**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        }); //Snow Codes
