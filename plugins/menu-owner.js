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
𐌟𐌟𐌟                  ✮              🌟              ✮
           ︎︎︎
              ⚜️ ℂ𝕆𝕄𝔸ℕ𝔻𝕀 𝔻𝔼𝕃𝕃'𝕆𝕎ℕ𝔼ℝ ⚜️

> 🔹️ ${_0x3f73c1}𝒊𝒎𝒑𝒐𝒔𝒕𝒂𝒏𝒐𝒎𝒆
> 🔹️ ${_0x3f73c1}𝒓𝒆𝒔𝒆𝒕𝒕𝒂𝒏𝒐𝒎𝒆
> 🔹️ ${_0x3f73c1}𝒈𝒆𝒔𝒕𝒊𝒔𝒄𝒊 @
> 🔹️ ${_0x3f73c1}𝒔𝒆𝒕𝒈𝒓𝒖𝒑𝒑𝒊
> 🔹️ ${_0x3f73c1}𝒂𝒈𝒈𝒊𝒖𝒏𝒈𝒊𝒈𝒓𝒖𝒑𝒑𝒊 @
> 🔹️ ${_0x3f73c1}𝒓𝒆𝒔𝒆𝒕𝒈𝒓𝒖𝒑𝒑𝒊
> 🔹️ ${_0x3f73c1}𝒔𝒆𝒕𝒑𝒑 (+ 𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆)
> 🔹️ ${_0x3f73c1}𝒃𝒂𝒏 @
> 🔹️ ${_0x3f73c1}𝒖𝒏𝒃𝒂𝒏 @
> 🔹️ ${_0x3f73c1}𝒃𝒍𝒐𝒄𝒌 @
> 🔹️ ${_0x3f73c1}𝒖𝒏𝒃𝒍𝒐𝒄𝒌 @
> 🔹️ ${_0x3f73c1}𝒋𝒐𝒊𝒏 (+ 𝒍𝒊𝒏𝒌)
> 🔹️ ${_0x3f73c1}𝒐𝒖𝒕 / 𝒃𝒚𝒆
> 🔹️ ${_0x3f73c1}𝒑𝒓𝒆𝒇𝒊𝒔𝒔𝒐
> 🔹️ ${_0x3f73c1}𝒓𝒆𝒔𝒆𝒕𝒕𝒂𝒑𝒓𝒆𝒇𝒊𝒔𝒔𝒐
> 🔹️ ${_0x3f73c1}𝒅𝒐𝒎𝒊𝒏𝒖𝒔 (𝒂𝒖𝒕𝒐𝒂𝒅𝒎𝒊𝒏)
> 🔹️ ${_0x3f73c1}𝒛𝒆𝒓𝒐 @
> 🔹️ ${_0x3f73c1}𝒂𝒅𝒅 (𝒏𝒖𝒎𝒆𝒓𝒐 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊) @
> 🔹️ ${_0x3f73c1}𝒓𝒆𝒎𝒐𝒗𝒆 (𝒏𝒖𝒎𝒆𝒓𝒐 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊) @
> 🔹️ ${_0x3f73c1}𝒃𝒍𝒂𝒄𝒌𝒉𝒐𝒍𝒆
> 🔹️ ${_0x3f73c1}𝒆𝒙𝒊𝒕
> 🔹️ ${_0x3f73c1}𝒅𝒐𝒘𝒏𝒂𝒍𝒍
> 🔹️ ${_0x3f73c1}𝒖𝒑𝒂𝒍𝒍
> 🔹️ ${_0x3f73c1}𝒐𝒏
> 🔹️ ${_0x3f73c1}𝒐𝒇𝒇
> 🔹️ ${_0x3f73c1}𝒃𝒂𝒏𝒍𝒊𝒔𝒕
> 🔹️ ${_0x3f73c1}𝒃𝒍𝒐𝒄𝒌𝒍𝒊𝒔𝒕
> 🔹️ ${_0x3f73c1}𝒔𝒐𝒓𝒑𝒓𝒆𝒔𝒂
> 🔹️ ${_0x3f73c1}𝒊𝒏𝒗𝒆𝒓𝒔𝒊𝒐𝒏𝒆
> 🔹️ ${_0x3f73c1}𝒍𝒊𝒔𝒕𝒂𝒎𝒖𝒕𝒊
> 🔹️ ${_0x3f73c1}𝒍𝒊𝒔𝒕𝒂𝒑𝒓𝒆𝒎
> 🔹️ ${_0x3f73c1}𝒃𝒊𝒈𝒕𝒂𝒈
> 🔹️ ${_0x3f73c1}𝒔𝒂𝒇𝒆
> 🔹️ ${_0x3f73c1}𝒍𝒐𝒄𝒌 (𝒕𝒆𝒔𝒕𝒐)
> 🔹️ ${_0x3f73c1}𝒄𝒐𝒏𝒇𝒖
> 🔹️ ${_0x3f73c1}𝒃𝒍𝒐𝒄𝒌𝒈𝒓𝒐𝒖𝒑

  `.trim();

  _0x542b94.sendMessage(_0x512ed3.chat, { text: _0x2aa101 }, { quoted: _0x6bd16e });
};

handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(owner)$/i;

export default handler;