import { performance } from 'perf_hooks';

let handler = async (m, { conn, usedPrefix, text }) => {
  if (!text) return m.reply("𝐌𝐞𝐧𝐳𝐢𝐨𝐧𝐚 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐝𝐚 𝐚𝐛𝐮𝐬𝐚𝐫𝐞.");

  let uptime = clockString(process.uptime() * 1000);
  let speed = (performance.now() - performance.now()).toFixed(4);

  let { key } = await conn.sendMessage(m.chat, { 
    text: "🥵🥵" 
  }, { quoted: m });

  const abuseArray = [
    "8𖦹𖦹😨𖦹𖦹🤛🏽𖦹𖦹D", 
    "8𖦹𖦹😢𖦹🤛🏽𖦹𖦹D", 
    "8𖦹𖦹😭🤛🏽𖦹𖦹D",
    "8𖦹𖦹😱𖦹𖦹🤛🏽𖦹𖦹D", 
    "8𖦹𖦹😵𖦹🤛🏽𖦹𖦹D", 
    "8𖦹𖦹💀🤛🏽𖦹𖦹D"
  ];

  for (let item of abuseArray) {
    try {
      await conn.sendMessage(m.chat, { text: item, edit: key }, { quoted: m });
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
    } catch (err) {
      console.error("Error sending message:", err);
    }
  }

  let contactMessage = {
    key: {
      participants: "0@s.whatsapp.net", 
      remoteJid: "status@broadcast", 
      fromMe: false, 
      id: "Halo"
    },
    message: {
      contactMessage: { 
        displayName: 'Bixby Ping 𖣘',
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Unlimited\nORG:Unlimited\nEND:VCARD`
      }
    }
  };

  return conn.sendMessage(m.chat, { 
    text: ` ${text} 𝐡𝐚 𝐫𝐢𝐜𝐞𝐯𝐮𝐭𝐨 𝐥'𝐚𝐛𝐮𝐬𝐨😈`.trim(),
    edit: key,
    mentions: [m.sender] 
  }, { quoted: m });
};

handler.help = ['infobot', 'speed'];
handler.tags = ['info', 'tools'];
handler.command = /^(bussa)$/i;

export default handler;

function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}
