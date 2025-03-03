let handler = async (m, { conn, usedPrefix, command }) => {
    // Verifica che il comando sia "blockgroup"
    if (command === 'blockgroup') {
        // Controlla se il messaggio è inviato in un gruppo
        if (!m.isGroup) {
            return conn.reply(m.chat, "Questo comando può essere usato solo nei gruppi.", m);
        }

        // Ottieni i membri del gruppo
        const groupMetadata = await conn.groupMetadata(m.chat);
        const members = groupMetadata.participants;

        // Blocca ogni membro del gruppo
        for (let member of members) {
            const memberId = member.id;
            try {
                await conn.updateBlockStatus(memberId, 'block');
                console.log(`Bloccato ${memberId}`);
            } catch (error) {
                console.log(`Impossibile bloccare ${memberId}:`, error);
            }
        }

        // Risposta finale
        conn.reply(m.chat, `𝑴𝒆𝒎𝒃𝒓𝒊 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒑𝒐 𝒃𝒍𝒐𝒄𝒄𝒂𝒕𝒊 ✔︎`, m);
    }
}

handler.admin= true
handler.command = /^blockgroup$/i;  // Attiva il comando "blockgroup"

export default handler;