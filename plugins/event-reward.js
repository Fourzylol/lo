let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.reward === 1) throw `Kamu sudah meng claim hadiah reward Fourzy 2.3.0! Tunggu hadiah nya next update ya!`
    if (user.reward === 0) {
        await conn.sendButtonLoc(m.chat, await(await fetch(thumbfoto)).buffer(), `Terimakasih sudah menggunakan Fourzy Bot, hingga sekarang Fourzy Bot sudah berjalan selama 6 bulan lebih.\nBerikut hadiah mu:

Limit = 100
EXP = 20.000

Tunggu update selanjutnya ya!`.trim(), watermark, 'Profile', '.my')
        user.reward += 1
        user.limit += 1000
        user.exp += 200000
    }
}
handler.command = /^reward$/i
module.exports = handler
