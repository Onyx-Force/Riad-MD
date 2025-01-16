console.log('Onix in caricamento...');

import { join, dirname } from 'path';
import { createRequire } from "module";
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { name, author } = require(join(__dirname, './package.json'));
const { say } = cfonts;

// Mostra il banner iniziale
say('\nONIX', {
    font: 'block', // Stile del font
    align: 'center', // Allineamento
    colors: ['magenta', 'magenta'], // Colore del testo
});

// Variabile per evitare più avvii simultanei
var isRunning = false;

/**
 * Avvia un file JavaScript
 * @param {String} file Percorso del file da avviare
 */
function start(file) {
    if (isRunning) return;
    isRunning = true;

    // Argomenti per il processo principale
    let args = [join(__dirname, file), ...process.argv.slice(2)];

    // Banner per il creatore
    say('Di Riad', {
        font: 'console',
        align: 'center',
        colors: ['magenta'], // Colore del testo
    });

    // Configura il processo cluster
    setupMaster({
        exec: args[0],
        args: args.slice(1),
    });

    let p = fork();

    // Gestione dei messaggi dal processo figlio
    p.on('message', data => {
        console.log('[RECEIVED]', data);
        switch (data) {
            case 'reset':
                p.process.kill();
                isRunning = false;
                start.apply(this, arguments);
                break;
            case 'uptime':
                p.send(process.uptime());
                break;
        }
    });

    // Gestione della chiusura del processo
    p.on('exit', (_, code) => {
        isRunning = false;
        console.error('Errore inaspettato', code);

        if (code === 0) return;

        // Riavvia il processo se il file è modificato
        watchFile(args[0], () => {
            unwatchFile(args[0]);
            start(file);
        });
    });

    // Opzioni CLI con Yargs
    let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
    if (!opts['test']) {
        const rl = createInterface(process.stdin, process.stdout);
        if (!rl.listenerCount('line')) {
            rl.on('line', line => {
                p.emit('message', line.trim());
            });
        }
    }
}

// Avvia il file principale
start('main.js');