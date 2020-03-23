const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {
    totalShards: '3',
    token: "Njg5ODY4MzM1MTAxMjQ3NTA5.XnJvaw.d2kvL3G376hh0ra0V5PNDVq7iic"// Tokeninizi Buraya Girin..
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);