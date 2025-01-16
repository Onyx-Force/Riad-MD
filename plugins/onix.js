let handler = async (m, { conn }) => {
    // Definisci la caption con spazi vuoti
    let caption = "                                                                                                                                        "; // Spazi vuoti

    // Link fisso per l'immagine da usare sempre
    const fixedImageUrl = "https://qu.ax/FxBfx.png";
    const profileBuffer = await (await fetch(fixedImageUrl)).buffer();

    // Invia il messaggio con l'immagine e la caption
    await conn.sendFile(m.chat, 'storage/image/onix.jpg', 'onix.jpg', caption, m, false, {
        quoted: {
            key: {
                participants: "0@s.whatsapp.net",
                fromMe: false,
                id: "Halo",
            },
            message: {
                locationMessage: {
                    name: "𝑪𝒓𝒆𝒅𝒊𝒕𝒊 💎",  // Scritta in miniatura
                    jpegThumbnail: profileBuffer, // Miniatura immagine
                },
            },
            participant: "0@s.whatsapp.net",
        },
    });
}

handler.command = /^(onix)$/i;
export default handler;