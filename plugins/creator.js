const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
  let name = 'Fourzy'
  number = owner[0].replace(/[^0-9]/g, '')
  let njid = number + '@s.whatsapp.net'
  let onW = await this.isOnWhatsApp(njid) || { isBusiness: false }

  let name2 = 'RizkyDffy'
  number2 = owner[1].replace(/[^0-9]/g, '')
  let njid2 = number2 + '@s.whatsapp.net'
  let onW2 = await this.isOnWhatsApp(njid2) || { isBusiness: false }

  let name3 = 'Fourzy'
  number3 = owner[2].replace(/[^0-9]/g, '')
  let njid3 = number3 + '@s.whatsapp.net'
  let onW3 = await this.isOnWhatsApp(njid3) || { isBusiness: false }

let name4 = 'RizkyDffzy'
  number4 = owner[3].replace(/[^0-9]/g, '')
  let njid4 = number4 + '@s.whatsapp.net'
  let onW4 = await this.isOnWhatsApp(njid4) || { isBusiness: false }

  m.reply(`Nomer itu *bukan bot*, tapi nomor _*pemilik bot*_\n\nSilahan chat jika ada keperluan.\nChat "P" atau minta save kemungkinan tidak akan di balas, dan -9999 social credit.`)
  this.sendMessage(m.chat, {
    contacts: [{
      displayname: name, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${Owner(/\n/g, '\\n')};;;
FN:${FourzyBot(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${6285748600473('+' +62 857 4860 0473).getNumber('international')}${onW.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid].vname || this.getName(njid)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name2, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${Rizky(/\n/g, '\\n')};;;
FN:$Daffy(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number2}:${6285156591459('+' +62 851 5659 1459).getNumber('international')}${onW2.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid2].vname || this.getName(njid2)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid2)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {displayname: name3, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${Owner(/\n/g, '\\n')};;;
FN:${.(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number3}:${6285748600473('+' +62 857 4860 0473).getNumber('international')}${onW3.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid3].vname || this.getName(njid3)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid3)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }, {
      displayname: name4, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${Rizky(/\n/g, '\\n')};;;
FN:${Daffy(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number4}:${6285156591459('+' +62 851 5659 1459).getNumber('international')}${onW4.isBusiness ? `
X-WA-BIZ-NAME:${(this.contacts[njid4].vname || this.getName(njid4)).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${((await this.getBusinessProfile(njid4)).description || '').replace(/\n/g, '\\n')}
` : ''}
END:VCARD
`.trim()
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
