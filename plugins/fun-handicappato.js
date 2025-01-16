let handler = async (m, { conn, command, text }) => {
    if (!text) return m.reply("𝑫𝒆𝒗𝒊 𝒕𝒂𝒈𝒈𝒂𝒓𝒆 𝒖𝒏𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒊𝒏𝒔𝒊𝒆𝒎𝒆 𝒂𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐!");

    let lovePercentage = Math.floor(Math.random() * 101); // Da 0 a 100
    let response;

    if (lovePercentage < 50) {
        response = "> 𝐒𝐞𝐢 𝐪𝐮𝐚𝐬𝐢 𝐬𝐚𝐧𝐨/𝐚🫠";
    } else if (lovePercentage < 80) {
        response = "> 𝐇𝐚𝐢 𝐠𝐢𝐚 𝐥𝐚 104?🫨";
    } else {
        response = "> 𝐂𝐮𝐫𝐚𝐭𝐢, 𝐦𝐚𝐥𝐚𝐭𝐨/𝐚.🤡";
    }

    let loveMessage = `-------☾︎☠︎☽︎-------\n𝙲𝙰𝙻𝙲𝙾𝙻𝙰𝚃𝙾𝚁𝙴 𝙳𝙸 104🤓\n➡️ ${text} 𝚎̀ 𝚊𝚗𝚍𝚒𝚌𝚊𝚙𝚙𝚊𝚝𝚘/𝚊 𝚍𝚎𝚕: ${lovePercentage}%\n${response}\n-------☾︎☠︎☽︎-------`.trim();

    m.reply(loveMessage, null, { mentions: conn.parseMention(loveMessage) });
}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(104)$/i
export default handler;
