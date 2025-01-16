let handler = async (m, { conn, command, text }) => {
    if (!text) return m.reply("𝑫𝒆𝒗𝒊 𝒕𝒂𝒈𝒈𝒂𝒓𝒆 𝒖𝒏𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒊𝒏𝒔𝒊𝒆𝒎𝒆 𝒂𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐!");

    let lovePercentage = Math.floor(Math.random() * 101); // Da 0 a 100
    let response;

    if (lovePercentage < 50) {
        response = "> 𝐂𝐡𝐞 𝐜𝐞𝐬𝐬𝐨/𝐚.🤮";
    } else if (lovePercentage < 80) {
        response = "> 𝐂'𝐞̀ 𝐝𝐢 𝐦𝐞𝐠𝐥𝐢𝐨.🙃";
    } else {
        response = "> 𝐜𝐡𝐞 𝐬𝐜𝐡𝐢𝐚𝐧𝐭𝐨!🤩";
    }

    let loveMessage = `-------☾︎✿︎☽︎-------\n𝙲𝙰𝙻𝙲𝙾𝙻𝙰𝚃𝙾𝚁𝙴 𝙳𝙸 𝚂𝙴𝚇𝙰𝙶𝙶𝙸𝙽𝙴🥵💦\n➡️ ${text} 𝚎̀ 𝚜𝚎𝚡𝚢 𝚍𝚎𝚕: ${lovePercentage}%\n${response}\n-------☾︎✿︎☽︎-------`.trim();

    m.reply(loveMessage, null, { mentions: conn.parseMention(loveMessage) });
}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(sexy)$/i
export default handler;
