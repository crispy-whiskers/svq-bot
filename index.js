var Discord = require('discord.js');
const bot = new Discord.Client();
let count = 0;
bot.on('message', (message)=>{
    if(message.author.bot) return;

    if(/(when.+?(ch(\d|$| )|chapter|chap)|(ch(\d|$| )|chapter|chap).*?when)/gi.test(message.content)){
        count=count+1;
        message.reply(
            `I detected that you may have asked about when a new chapter will release. If you did ask, please read <#872530946585419899>.
Since this bot was started, this has happened \`${count}\` times.`);
        return;
    }
    if(message.content === 'punch timka'){
        message.channel.send('poonch')
    }

    if(message.content === "kiss mwah"){
        message.channel.send('u lookin kinda breedable ngl');
    }
})

bot.login(require('./auth.json').token);