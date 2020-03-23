const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'r!'
module.exports = client => {
  
  const aktiviteListesi = [
    ` 🎉 Rektor's Rewards™ | ⏰7/24 Aktif!`,
    ` 🎉 Rektor's Rewards™ | Gerçek Invite Sunucusu `,
    ` 🎉 Rektor's Rewards™ | ⏰7/24 Online!`,
    ` 🎉 Rektor's Rewards™ | Real Invite Server `
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}