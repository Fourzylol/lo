let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://api-alphabot.herokuapp.com/api/nsfw/hentai?apikey=Alphabot`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'istighfar woi', '©Fourzy', 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['hentai']
handler.tags = ['hentai']

handler.command = /^(hentai)$/i
handler.premium = true

module.exports = handler
