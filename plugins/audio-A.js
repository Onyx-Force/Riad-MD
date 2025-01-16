// Crediti: Onix, di Riad
let handler = async (m, { conn }) => {
  // Controlla se la funzione è attivata nel database
  let chatData = global.db.data.chats[m.chat] || {};
  if (!chatData.strillo) {
    // Se la funzione è disattivata, esce senza eseguire il comando
    console.log('Funzione audio disattivata in questo gruppo.');
    return;
  }

  // Percorso del file musicale
  const audioPath = './storage/mp3/aaa.mp3';

  // Invia il file audio come traccia musicale nel gruppo
  await conn.sendMessage(
    m.chat,
    { 
      audio: { url: audioPath }, 
      mimetype: 'audio/mp4', 
      fileName: 'armi.mp3'  // Opzionale: nome file visibile
    },
    { quoted: m }
  );

  console.log('Traccia musicale inviata con successo:', audioPath);
};

// Permette di attivare/disattivare la funzione tramite `global.db.data`
handler.customPrefix = /ah|aah|aaah|aaaah|aaaaah|ahhhh|ahhh|ahh/i
handler.command = new RegExp;
handler.botAdmin = true;  // Il bot deve essere admin nel gruppo

export default handler;