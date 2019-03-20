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


client.on('message',async message => {
const emojis   = { arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')}` };

       if (message.content.startsWith(prefix + "help")) {
        
       message.channel.send(`** • قـــائمة الاومر ** :
       ${emojis.arrow}, **| ${prefix}help-games ⇏ \`$سرعة!\`
       ${emojis.arrow}, **| ${prefix}help-games ⇏ \`$برنامج!\`
        ${emojis.arrow},  | ${prefix}help-games ⇏ \`ألعاب!\`** `)


   }

});




 
 
 
 
 

client.login(process.env.BOT_TOKEN);
