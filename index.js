const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'd!';
const fs = require('fs');
const { Server } = require('http');
const { type } = require('os');
const { join } = require('path');
const { measureMemory } = require('vm');
client.commands = new Discord.Collection();
client.once('ready', () => {
    console.log('A Bot Online!');
    client.user.setActivity('d!help [segítség] Verzió: [v.0.3.9]'), {type: 'PLAYING'}
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  
if(command === 'ping'){
        message.channel.send('pong! :joy:')
    } 
    if(command === 'hello'){
    message.channel.send(`𝓗𝓮𝓵𝓵ó <@${message.author.id}> !`)
    }     
if(command === 'userinfo'){
   message.channel.send(`Információid:
   Neved: ${message.author.tag}
   Id: ${message.author.id}
   Fiók készítve: ${message.author.createdAt}`)
}
if(command === 'commands'){
    message.channel.send(`A parancsok:
    Parancsok Itt csak a használható parancsokat találod!
    d!hello Köszön neked a bot
    d!szerverinfo Kiírja a szerverinformációit
    d!time Elküldi neked a time.is oldalt
    d!teszt Csak újra inditáskor!
    d!invite invite amivel a botot meg tudod hívni
    d!info A bot információi
    d!help Help parancsok
    d!egyedi-commands Egyedi command információk
    d!bot-lealas A bot laálásának időpontjai
    d!dm Ír neked a bot egy üzenetet privátban(DM)!
    Folyamatosan bővül a lista tehát ne felejts el belépni a support szerverre! Amit a d!info-ban megtalálsz!`)
}
if(command === 'help'){
message.channel.send(`Help-ek:
Prefixem: d!
További infókért: d!info
Segítségkérés: d!commands`)
}
if(command === 'event'){
message.channel.send(`Bot infó: d!info`)
}
if(command === 'everyone'){
message.channel.send(`@everyone`)
}
if(command === 'teszt'){
    message.channel.send(`🆃🅴🆂🆉🆃 <@${message.author.id}>`)
}     
    if(command === 'fasz'){
message.channel.send('haha')
message.delete()
    }
if(command === 'invite'){
message.channel.send(`Link: https://discord.com/api/oauth2/authorize?client_id=734041827577167944&permissions=8&scope=bot`)
}
    if(command === 'music'){
        message.channel.send('Most níncs zene kommand!')
    }
    if(command === 'szerverinfo'){
        message.channel.send(`Szerverinformációk:
        Szerverneve:${message.guild.name}
        Tagok száma: ${message.guild.memberCount}
        Szerver régiója: ${regions[message.guild.region]}
        Ekkor lettem hozzáadva a szerverhez: ${message.guild.joinedAt}
        Szerver vezető: ${message.guild.owner}
        AFK szoba: ${message.guild.afkChannel}
        A szerver ekkor lett készítve: ${message.guild.createdAt}
        Alap csatorna (system csatorna): ${message.guild.systemChannel}
        Lekérdezte: <@${message.author.id}>`)
    } 
    if(command === 'bot-lealas'){
        message.channel.send('Soha nem ál le mivel 24/7-es a hosting!')
    } 
    if(command === 'egyedi-commands'){
        client.commands.get('egyedi-commands').execute(message, args);
    }
    if(command === `dm`){
        message.author.send("Szia! 👋  dm kommandokért: d!dm-kommandok")
    }
    if(command === 'egyedi-command'){
    message.channel.send(`Ha egyedi kommandot szeretnél:
    Ide lépje be ha egyedi commandot szeretnél: https://discord.gg/jcQWmWW `)
    }
    if(command === 'dm-kommandok'){
    message.author.send(`A parancsok:
    Parancsok Itt csak a dmben (privátban) használható parancsokat találod!')
    d!hello Köszön neked a bot
    d!teszt Csak újra inditáskor!
    d!help Help kommand
    d!invite invite amivel a botot meg tudod hívni
    d!info A bot információi
    d!help Help parancsok
    d!egyedi-commands Egyedi command információk
    d!bot-lealas A bot laálásának időpontjai
    Folyamatosan bővül a lista tehát ne felejts el belépni a support szerverre! Amit a d!info-ban megtalálsz!`)
    } 
});
client.login(token);
