import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command, args }) => {
    const chatData = global.db.data.chats[m.chat];

    // Mappa dei nomi standard con il loro equivalente personalizzato
    const featureMap = {
        'antiinsta': '𝐚𝐧𝐭𝐢𝐢𝐧𝐬𝐭𝐚',
        'antilink': '𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 ⌁',
        'modoadmin': '𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧',
        'antifroci': '𝐚𝐧𝐭𝐢𝐟𝐫𝐨𝐜𝐢',
        'antielimina': '𝐚𝐧𝐭𝐢𝐞𝐥𝐢𝐦𝐢𝐧𝐚 ⌁',
        'strillo': '𝐬𝐭𝐫𝐢𝐥𝐥𝐨',
        'antilinkhard': '𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝐡𝐚𝐫𝐝 ⌁',
        'antitiktok': '𝐚𝐧𝐭𝐢𝐭𝐢𝐤𝐭𝐨𝐤',
        'benvenuto': '𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨 ⌁',
        'sologruppo': '𝐬𝐨𝐥𝐨𝐠𝐫𝐮𝐩𝐩𝐨 ⌁',
        'soloprivato': '𝐬𝐨𝐥𝐨𝐩𝐫𝐢𝐯𝐚𝐭𝐨 ⌁',
    };

    // Se l'utente specifica una funzione
    if (args[0]) {
        const featureKey = args[0].toLowerCase(); // Nome standard dato dall'utente
        if (featureMap[featureKey] !== undefined) {
            // Cambia lo stato della funzione
            chatData[featureKey] = !chatData[featureKey];
        }
        // Nessuna risposta se la funzione non è riconosciuta
    }

    // Mostra lo stato delle funzioni
    const featuresStatus = Object.entries(featureMap).map(([standard, decorated]) => {
        return ` ${chatData[standard] ? '✅️' : '❌️'} » ${decorated}`;
    }).join('\n');

    const statusMessage = `
✮      ✮      ✮      ✮      ✮      ✮      ✮      ✮      ✮

${featuresStatus}\n
▬▬▬▬▬▬▬▬▬▬▬
> ✅️ ➣ 𝑭𝒖𝒏𝒛𝒊𝒐𝒏𝒆 𝑶𝑵 ✓
> ❌️ ➣ 𝑭𝒖𝒏𝒛𝒊𝒐𝒏𝒆 𝑶𝑭𝑭 ✘
▬▬▬▬▬▬▬▬▬▬▬
> ᵘˢᵃ •ⁱⁿᶠᵒ ᵖᵉʳ ˡᵃ ⁱⁿᶠᵒˢᵗᵃᵗᵒ
> ⌁ = ᶠᵘⁿᶻⁱᵒⁿᵉ ⁿᵒⁿ ᵃᵍᵍⁱᵒʳⁿᵃᵇⁱˡᵉ ⁿᵉˡ ᵐᵉⁿᵘ ☹︎

✮      ✮      ✮      ✮      ✮      ✮      ✮      ✮      ✮
    `.trim();

    const thumbnailUrl = "https://qu.ax/DQsgr.png"; // Link immagine
    const profileBuffer = await (await fetch(thumbnailUrl)).buffer(); // Scarica immagine

    // Invia il messaggio con immagine in miniatura e scritta in miniatura
    await conn.sendMessage(m.chat, {
        text: statusMessage,
        jpegThumbnail: profileBuffer,
    }, {
        quoted: {
            key: {
                participants: "0@s.whatsapp.net",
                fromMe: false,
                id: "Halo",
            },
            message: {
                locationMessage: {
                    name: "𝐎𝐧𝐢𝐱 🌟", // Scritta in miniatura
                    jpegThumbnail: profileBuffer, // Immagine in miniatura
                },
            },
            participant: "0@s.whatsapp.net",
        },
    });
};

handler.help = ['funzioni'];
handler.tags = ['menu'];
handler.command = /^(funzioni)$/i;

export default handler;