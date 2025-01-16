import 'os';
import 'util';
import 'human-readable';
import '@whiskeysockets/baileys';
import 'fs';
import 'perf_hooks';

let handler = async (_0x512ed3, { conn: _0x542b94, usedPrefix: _0x3f73c1 }) => {
  const { welcome: _0x16d809, detect: _0x4c3a9f } = global.db.data.chats[_0x512ed3.chat];
  let _0x5bfb0b = _0x512ed3.quoted ? _0x512ed3.quoted.sender : _0x512ed3.mentionedJid && _0x512ed3.mentionedJid[0] ? _0x512ed3.mentionedJid[0] : _0x512ed3.fromMe ? _0x542b94.user.jid : _0x512ed3.sender;
  const _0x197a8a = (await _0x542b94.profilePictureUrl(_0x5bfb0b, "image").catch(_0x2cb040 => null)) || "./src/avatar_contact.png";

  let _0x53e6f1;
  if (_0x197a8a !== "./src/avatar_contact.png") {
    _0x53e6f1 = await (await fetch(_0x197a8a)).buffer();
  } else {
    _0x53e6f1 = await (await fetch("https://qu.ax/DQsgr.png")).buffer();
  }

  let _0x6bd16e = {
    'key': {
      'participants': "0@s.whatsapp.net",
      'fromMe': false,
      'id': "Halo"
    },
    'message': {
      'locationMessage': {
        'name': " 𝐎𝐧𝐢𝐱 🌟",
        'jpegThumbnail': await (await fetch("https://qu.ax/DQsgr.png")).buffer()
      }
    },
    'participant': "0@s.whatsapp.net"
  };

  let _0x2aa101 = `
𐌟𐌟𐌟            ✮                🌟                ✮
   
                  🟪    𝕄𝕖𝕟𝕦̀ 𝕕𝕚 𝕆𝕟𝕚𝕩    🟪
══════════
 𐌠◻️ ${_0x3f73c1}𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨    
 𐌠◻️ ${_0x3f73c1}𝐅𝐮𝐧𝐳𝐢𝐨𝐧𝐢    
 𐌠◻️ ${_0x3f73c1}𝐀𝐝𝐦𝐢𝐧    
 𐌠◻️ ${_0x3f73c1}𝐆𝐫𝐮𝐩𝐩𝐨    
 𐌠◻️ ${_0x3f73c1}𝐎𝐰𝐧𝐞𝐫    
 𐌠◻️ ${_0x3f73c1}𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬    
 𐌠◻️ ${_0x3f73c1}𝐆𝐢𝐨𝐜𝐡𝐢    
 𐌠◻️ ${_0x3f73c1}𝐎𝐧𝐢𝐱    
 𐌠◻️ ${_0x3f73c1}𝐌𝐮𝐬𝐢𝐜𝐚    
║🟣  *𝐂𝐫𝐞𝐝𝐢𝐭𝐢*  ➠➠  ✮ ᴏɴɪx ✮   ﹡ᵈⁱ ʳⁱᵃᵈ﹡
  

  `.trim();

  _0x542b94.sendMessage(_0x512ed3.chat, { text: _0x2aa101 }, { quoted: _0x6bd16e });
};

handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(menu|comandi)$/i;

export default handler;