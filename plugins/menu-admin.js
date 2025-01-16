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
    _0x53e6f1 = await (await fetch("https://qu.ax/aeJAK.png")).buffer();
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
𐌟𐌟𐌟             ✮                   🌟                   ✮
   
             👑 ℂ𝕆𝕄𝔸ℕ𝔻𝕀 𝔻𝔼𝔾𝕃𝕀 𝔸𝔻𝕄𝕀ℕ 👑

> 🔸️ ${_0x3f73c1}𝒑𝒓𝒐𝒎𝒖𝒐𝒗𝒊 (𝒑)
> 🔸️ ${_0x3f73c1}𝒓𝒆𝒕𝒓𝒐𝒄𝒆𝒅𝒊 (𝒓)
> 🔸️ ${_0x3f73c1}𝒘𝒂𝒓𝒏 / 𝒖𝒏𝒘𝒂𝒓𝒏
> 🔸️ ${_0x3f73c1}𝒎𝒖𝒕𝒂 / 𝒔𝒎𝒖𝒕𝒂
> 🔸️ ${_0x3f73c1}𝒉𝒊𝒅𝒆𝒕𝒂𝒈 / 𝒕𝒂𝒈
> 🔸️ ${_0x3f73c1}𝒂𝒑𝒆𝒓𝒕𝒐 / 𝒄𝒉𝒊𝒖𝒔𝒐
> 🔸️ ${_0x3f73c1}𝒔𝒆𝒕𝒘𝒆𝒍𝒄𝒐𝒎𝒆 / 𝒔𝒆𝒕𝒃𝒚𝒆
> 🔸️ ${_0x3f73c1}𝒊𝒏𝒂𝒕𝒕𝒊𝒗𝒊
> 🔸️ ${_0x3f73c1}𝒊𝒄𝒆 (𝒏𝒖𝒎𝒆𝒓𝒐 𝒊𝒏 𝒎𝒊𝒏𝒖𝒕𝒊)
> 🔸️ ${_0x3f73c1}𝒌𝒊𝒄𝒌 / 𝒐𝒖𝒕𝒏𝒊𝒈𝒈𝒂 / 𝒄𝒂𝒄𝒄𝒂 / 𝒑𝒖𝒇𝒇𝒐 / 𝒌𝒂𝒎𝒆𝒉𝒂𝒎𝒆𝒉𝒂
> 🔸️ ${_0x3f73c1}𝒄𝒐𝒑𝒚 (𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊𝒐)
> 🔸️ ${_0x3f73c1}𝒏𝒐𝒎𝒆
> 🔸️ ${_0x3f73c1}𝒃𝒊𝒐
> 🔸️ ${_0x3f73c1}𝒓𝒖𝒍𝒆𝒔
> 🔸️ ${_0x3f73c1}𝒑𝒊𝒄
> 🔸️ ${_0x3f73c1}𝒔𝒆𝒕𝒑𝒉𝒐𝒕𝒐 (𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆)
> 🔸️ ${_0x3f73c1}𝒎𝒆𝒎𝒃𝒓𝒊
> 🔸️ ${_0x3f73c1}𝒄𝒍𝒐𝒔𝒆 (𝒏𝒖𝒎𝒆𝒓𝒐 𝒊𝒏 𝒎𝒊𝒏𝒖𝒕𝒊)
  `.trim();

  _0x542b94.sendMessage(_0x512ed3.chat, { text: _0x2aa101 }, { quoted: _0x6bd16e });
};

handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(admin)$/i;

export default handler;