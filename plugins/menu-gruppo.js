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
𐌟𐌟𐌟                   ✮            🌟            ✮
           
              👥️   ℂ𝕆𝕄𝔸ℕ𝔻𝕀 𝔻𝔼𝕃 𝔾ℝ𝕌ℙℙ𝕆   👥️

> 🔸️ ${_0x3f73c1}𝒉𝒅 (𝒇𝒐𝒕𝒐)
> 🔸️ ${_0x3f73c1}𝒊𝒏𝒔𝒖𝒍𝒕𝒂
> 🔸️ ${_0x3f73c1}𝒓𝒊𝒗𝒆𝒍𝒂
> 🔸️ ${_0x3f73c1}𝒂𝒖𝒕𝒐𝒂𝒅𝒎𝒊𝒏
> 🔸️ ${_0x3f73c1}𝒕𝒐𝒑 (𝒕𝒐𝒑 20, 50, 100)
> 🔸️ ${_0x3f73c1}𝒔𝒆𝒈𝒂
> 🔸️ ${_0x3f73c1}𝒅𝒊𝒕𝒂𝒍𝒊𝒏𝒐
> 🔸️ ${_0x3f73c1}𝒇𝒓𝒐𝒄𝒊𝒐 @
> 🔸️ ${_0x3f73c1}𝒍𝒆𝒔𝒃𝒊𝒄𝒂 @
> 🔸️ ${_0x3f73c1}𝒏𝒆𝒈𝒓𝒐 @
> 🔸️ ${_0x3f73c1}104 @
> 🔸️ ${_0x3f73c1}𝒄𝒂𝒛𝒛𝒐 @
> 🔸️ ${_0x3f73c1}𝒇𝒊𝒈𝒂 @
> 🔸️ ${_0x3f73c1}𝒔𝒆𝒙𝒚 @
> 🔸️ ${_0x3f73c1}𝒃𝒖𝒔𝒔𝒂 @
> 🔸️ ${_0x3f73c1}𝒔𝒄𝒐𝒑𝒂 @
> 🔸️ ${_0x3f73c1}𝒅𝒂𝒅𝒐
> 🔸️ ${_0x3f73c1}𝒅𝒐𝒎𝒊𝒏𝒂
> 🔸️ ${_0x3f73c1}𝒊𝒏𝒇𝒐
> 🔸️ ${_0x3f73c1}𝒂𝒎𝒐𝒓𝒆 @
> 🔸️ ${_0x3f73c1}𝒐𝒅𝒊𝒐 @
> 🔸️ ${_0x3f73c1}𝒑𝒖𝒕𝒕𝒂𝒏𝒂 @
> 🔸️ ${_0x3f73c1}𝒃𝒐𝒏𝒌
> 🔸️ ${_0x3f73c1}𝒕𝒓𝒂𝒏𝒔
> 🔸️ ${_0x3f73c1}𝒛𝒊𝒛𝒛𝒂𝒏𝒊𝒂
> 🔸️ ${_0x3f73c1}𝒐𝒓𝒂𝒓𝒊𝒐
> 🔸️ ${_0x3f73c1}𝒎𝒆𝒕𝒆𝒐
> 🔸️ ${_0x3f73c1}𝒔𝒆𝒕𝒊𝒈 (𝒏𝒊𝒄𝒌 𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎)
> 🔸️ ${_0x3f73c1}𝒕𝒐𝒑𝒈𝒂𝒚𝒔
> 🔸️ ${_0x3f73c1}𝒕𝒐𝒑𝒏𝒂𝒛𝒊
> 🔸️ ${_0x3f73c1}𝒔𝒕𝒊𝒄𝒌𝒆𝒓 (𝒔)  ⚠︎ 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑖𝑛 𝑚𝑎𝑛𝑢𝑡𝑒𝑛𝑧𝑖𝑜𝑛𝑒
> 🔸️ ${_0x3f73c1}𝒔𝒍𝒐𝒕
> 🔸️ ${_0x3f73c1}𝒕𝒐𝒊𝒎𝒈
> 🔸️ ${_0x3f73c1}𝒕𝒐𝒈𝒊𝒇
> 🔸️ ${_0x3f73c1}𝒕𝒐𝒗𝒊𝒅𝒆𝒐
> 🔸️ ${_0x3f73c1}𝒕𝒕𝒔 (𝒂𝒍 𝒗𝒐𝒄𝒂𝒍𝒆)
> 🔸 ${_0x3f73c1}𝒕𝒐𝒑𝒎𝒊𝒄𝒓𝒐
> 🔸 ${_0x3f73c1}𝒕𝒐𝒑𝒔𝒆𝒙𝒚
> 🔸 ${_0x3f73c1}𝒕𝒐𝒑𝒕𝒓𝒐𝒊𝒆
> 🔸 ${_0x3f73c1}𝒕𝒐𝒑104
> 🔸 ${_0x3f73c1}𝒕𝒐𝒑𝒄𝒂𝒛𝒛𝒐
> 🔸 ${_0x3f73c1}𝒕𝒐𝒑𝒄𝒐𝒑𝒑𝒊𝒆
> 🔸 ${_0x3f73c1}𝒕𝒐𝒑𝒄𝒖𝒍𝒐
> 🔸 ${_0x3f73c1}𝒔𝒒𝒖𝒂𝒅
> 🔸 ${_0x3f73c1}𝒐𝒓𝒈𝒊𝒂
> 🔸 ${_0x3f73c1}𝒃𝒐𝒏𝒌𝒑𝒊𝒄
> 🔸 ${_0x3f73c1}𝒃𝒐𝒐𝒎 (𝒕𝒂𝒈)
  `.trim();

  _0x542b94.sendMessage(_0x512ed3.chat, { text: _0x2aa101 }, { quoted: _0x6bd16e });
};

handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(gruppo)$/i;

export default handler;