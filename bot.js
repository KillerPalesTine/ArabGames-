const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
 


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`KillerPalesTine`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ArabGames ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | ArabGames`,"http://twitch.tv/Death Shop")
client.user.setStatus("online")
});


client.on('message', puz => {
    if (puz.content == "$ألعاب") {//By Lion_Dz
        var x = ["https://f.top4top.net/p_1169dw8521.png",
"https://e.top4top.net/p_1169in6a31.png",
"https://f.top4top.net/p_1169ee7gw2.png",
"https://a.top4top.net/p_1169mgboh3.png",
"https://b.top4top.net/p_1169q1cq14.png",
"https://c.top4top.net/p_1169clnyc5.png",
"https://d.top4top.net/p_1169hpgrq6.png",
"https://e.top4top.net/p_116906rsa7.png",
"https://f.top4top.net/p_1169ije9g8.png",
"https://a.top4top.net/p_1169wt3369.png",
];
        var x2 = ['blur',
        "Creative Destruction",
        "Fortnite",
        "Gta IV",
        "Gta V",
        "Gta Sa",
        "Minecraft",
        "Outlast",
        "Outlast2",
        "Residentevil7",
       
       
       
       
        ];
       
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`السؤال هو:  __**${x[x3]}**__
**لديك 15 ثانية للإجابة**`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: **لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح**
            `)
        })
       
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} **إجابة صحيحة** :white_check_mark:   `);
        })
        })
    }
})


client.on('message', message => {
    if (message.content == "$سرعة") {
        var x = ["https://cdn.discordapp.com/attachments/553287876243357721/553515081296773140/bandicam_2019-03-07_12-50-04-444.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515077697929241/bandicam_2019-03-07_12-45-37-573.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515078180405249/bandicam_2019-03-07_12-48-29-284.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515078515949568/bandicam_2019-03-07_12-48-07-648.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515078129942548/bandicam_2019-03-07_12-49-15-371.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515077458853898/bandicam_2019-03-07_12-48-44-988.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515076385112065/bandicam_2019-03-07_12-47-45-547.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515076162813963/bandicam_2019-03-07_12-47-11-464.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515073897889793/bandicam_2019-03-07_12-46-28-283.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515071716982806/bandicam_2019-03-07_12-44-55-900.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515050653188097/bandicam_2019-03-07_12-44-33-759.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515045334810656/bandicam_2019-03-07_12-44-15-396.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515038917525505/bandicam_2019-03-07_12-43-48-900.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515019153965066/bandicam_2019-03-07_12-43-09-939.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515014066012160/bandicam_2019-03-07_12-42-33-352.jpg",
];
        var x2 = ['By Killer',
        "طبق رطب مرق بقر",
        "عش العصفور",
        "شجرة الأوغيري",
"ليوبليانا",
"كانيكي",
"خير و طماطم",
"تفاح و زلاطه",
"خيار وطرشي",
"جافاسكربت",
"امازون",
"النهاية",
"القسطنطينية",
"السعودية",
"البرازيل",
     ];
       
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اكتب اسرع
 :  ${x[x3]}
لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
       
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة الكلمه في الوقت المناسب`);
        })
        })
    }
});


client.on('message', fkk => {
    if (fkk.content == "$برنامج") {
        var x = ["المتاح للجميع لا يتاح لي",
"https://b.top4top.net/p_1164oe5tp1.jpg",
"https://c.top4top.net/p_1164jqp402.png",
"https://d.top4top.net/p_1164kjqt13.jpg",
"https://e.top4top.net/p_1164qljfs4.png",
"https://f.top4top.net/p_1164y0w3x5.jpg",
"https://e.top4top.net/p_1164r89w31.png",
"https://a.top4top.net/p_1164op08s3.jpg",
"https://b.top4top.net/p_11641d5sl4.png",
"https://c.top4top.net/p_1164u1nmr5.jpg",
"https://b.top4top.net/p_1164eph0n1.jpg",
"https://c.top4top.net/p_1164uj2802.jpg",
"https://d.top4top.net/p_116466p0l3.jpg",
"https://e.top4top.net/p_1164vosgi4.jpg",
"https://f.top4top.net/p_11649i6xv5.jpg",
"https://a.top4top.net/p_1164sozlg6.png",
];
        var x2 = ['',
		"فوتوشوب",
		"ديسكورد",
		"برو بوت",
		"فيس بوك",
		"ثعلب النار",
		"فايلزيلا",
		"باندي كام",
		"ميوزكلى",
		"يوتيوب",
		"كلاش واف كلانس",
		"واتس اب",
		"ماسنجر",
		"انستقرام",
		"جوجل",
		"تويتر",
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`╔════════【۩ **__برنامج__** ۩】════════╗

***${x[x3]}***

=====================================

**__لديك 15 ثانية للاجابة __**
╚═════════════════════════════╝`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} اجايه صحيح :white_check_mark: `);
        })
        })
    }
})



const pubg = [
     'PUBG | ما هو اقوي سلاح برائيك ؟',
     'PUBG | اين تجد سلاح الجروزا ؟ Grozza',
     'PUBG | ماذا تفضل اكثر ام فور ام سكار ؟',
     'PUBG | ايهما تفضل vss ام Awm',
     'PUBG | ماذا تفضل اكثر ؟ سولو ام سكواد ؟',
     'PUBG | كم جيم كسبت في العبه ؟',
     'PUBG | ما هو اكثر عدد قتلت في مسيرتك بالعبه',
     'PUBG | اذا انت المركز ال 2 هل سوف تقوم بتمشي علي رجلك ام ستاخذ سياره تحميك ؟',
     'PUBG | اذا وجدت شخصين يتقاتلان , هل سوف تتقاتل معهم ام تنتظر قليلا حتي يقتل احدهما الاخر ؟',
     'PUBG | اذا صديقك بالاسكواد يحتاج مساعده هل تساعده ام تتركه ؟',
     'PUBG | اذا تم عمل لصديقك كونك اوت وامامك لوت كثير جدا سوف تذهب لتساعده ام تاخذ الوت وتدعه يموت ؟',
     'PUBG | اين تجد ملابس القناصه ؟ ghillie suit ?',
     'PUBG | ايهما تفضل ؟ الاختباء حتي يتبقي اشخاص قليله ام تذهب لتقتل ولا تختبئ',
     'PUBG | اين تفضل ان تهبط من الطائره ؟ الاماكن الهادئيا لوت صغير ام الاماكن المزدحمه بالاعبين لاكن لوت كثير',
     'PUBG | كم عدد المرات التي فزت بها لوحدك سولو ؟',
     'PUBG | ما هو افضل سلاح تجيد استخدامه ؟',
     'PUBG | ما هو اندر سلاح قد تجده برائيك ؟',
     'PUBG | ما هو اندر سلاح جديد قد تجده برائيك ؟',
     'PUBG | ما هو عدوك في العبه لاق البنق ام لاق الفريمات الاف بي اس ؟',
     'PUBG | ايهما تفضل العب ؟ فـ المساء ام الصباح ؟',
     'PUBG | هل تحب ان يكون الجيم ملئ بلاعبين ام لاعبين قليلين ؟',
     'PUBG | هل الملابس تعبر عن انك محترف ام لا ؟',
     'PUBG | كم معك من مال ( كوين ) بلعبه ؟',
     'PUBG | ما هو اكثر شئ تكرهه في العبه ؟',
     'PUBG | ما هو اكثر شئ تحبه بلعبه ؟',
     'PUBG | ماذا تفضل شتو قن ( بندقيه ) ام قناصه ؟',
     'PUBG | ماذا تفضل اكثر ؟ درع لفل 3 متضرر ام درع لفل 2 غير متضرر',
     'PUBG | تفضل ان تلعب مع صديقك سكواد ام شخص غريب ؟',
     'PUBG | هل تظن انك افضل شخص في اصدقائك بهذه اللعبه؟',
     'PUBG | قيم نفسك من 10 كـ احتراف لك بالعبه',
     'PUBG | هل فزت جيم من قبل بالعبه ؟',
     'PUBG | هل وصلت للمركز ال 10 ( توب 10 ) قبل هكذا بلعبه ؟',
     'PUBG | هل قمت بلعب مع صديقك من قبل بلعبه ؟',
     'PUBG | هل تعلم من اخترع العبه ؟',
     'PUBG | لو خيروك لعبه ببجي ام فورت نايت ؟',
     'PUBG | هل يوجد شخص من اصدقاءك محترف اكثر منك ام انت اكثر شخص محترف ما بين اصدقاءك ؟',
     'PUBG | اذا كنت من فريق مطورين العبه ماذا ستفعل ؟',
     'PUBG | قيم من 10 مدي حبك للعبه',
     'PUBG | هل تحب ان تتكلم صوت مع اصدقاءك وانت تلعب معاهم ام لا تحب هذا الامر ؟',

]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('$pubg')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله باتل جرواند")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/416617103492251658/477741838292484127/pubg-orange-square.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});


client.on('message',async message => {
const emojis   = { arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')}` };

       if (message.content.startsWith($ + "help")) {
        
       message.channel.send(`** • قـــائمة الاومر ** :
       ${emojis.arrow}, **| ${prefix}help-games ⇏ \`$سرعة!\`
       ${emojis.arrow}, **| ${prefix}help-games ⇏ \`$برنامج!\`
       ${emojis.arrow}, **| ${prefix}help-games ⇏ \`$pubg!\`
        ${emojis.arrow},  | ${prefix}help-games ⇏ \`ألعاب!\`** `)


   }

});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`ولكم نورت السيرفر
 ${member}  
 `) 
}).catch(console.error)
})


const devs = ["518816831734022154"]// ايدي الخاص بحسابك
 
const adminprefix = "$";//Narox
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//لتغير البريفكس
  client.user.setPrefix(argresult).then
      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
 
  });


client.on("message", msg => {//Alpha Codes 
    var Alpha = '$';//البرفكس
    if(msg.content.startsWith(Alpha + "inv")){//Alpha Codes 
        let e = new Discord.RichEmbed()//Alpha Codes 
        .setTitle("**اضافه البوت لسيرفرك**")//Alpha Codes 
       .setDescription(`**📬 | اذا تريد البوت يرسلك الرابط بخاصك
       📇 | اذا تريد البوت يرسلك الرابط هنا بالشات**`)
        msg.channel.send(e).then(b => {
            b.react('📇')
            .then(() => b.react('📬'))
            .then(() =>b.react('📇'))
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === msg.author.id;

let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
msg.reply(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
b.delete(2000)
})
reaction2.on("collect", r => {
    msg.author.send(`${msg.author} https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    b.delete(2000)
    msg.reply("**تم ارسال الرابط في خاصك 📬**").then(d => {
        d.delete(2000)
    })
    })
        })
    }
});


client.on('message', message => { //RayGamerMC BotInfo Code
    if (message.content.startsWith("$bot")) { // "+bot" هو البريفكس ب إمكانك تغييره في أي وقت في +
    message.channel.send({ //Snow Codes RayGamerMC
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM') //Snow Codes
            .setTitle('``Informations Of [ArabGames]`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) //البنق
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) //الرام المستخدمة
            .addField('``servers``', [client.guilds.size], true) //عدد السيرفرات الي البوت موجود فيها
            .addField('``Users``' ,`[ ${client.users.size} ]` , true) //عدد مستخدمي البوت
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true) //اسم البوت
            .addField('``My ID``' , `[ ${client.user.id} ]` , true) // ايدي البوت
                  .addField('``My Prefix``' , `[ % ]` , true) //بريفكس البوت
                  .addField('``My Language``' , `[ Java Script ]` , true) //لغة البوت
                  .setFooter('By | KillerPalesTine') //اسم الي صنع البوت
    })
}
}); //كود معلومات البوت مطور


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$msgall')){ // هو البريفكس و يمكنك تغييره في أي وقت +
 if(!message.author.id === '518816831734022154') return; // حط الايدي حقك عشان تكون الوحيد الي يقدر يستخدم الأمر
message.channel.sendMessage(' جار ارسال الرسالة | ✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});






 
 
 
 
 

client.login(process.env.BOT_TOKEN);
