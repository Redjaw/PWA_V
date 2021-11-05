# PWA_V

## Esercitazione 4: service worker

In questa esercitazione sarà necessario utilizzare la cache ed il service worker per salvare in memoria gli assets e provare le funzionalità del service worker.

Per questa esercitazione verranno utilizzati un bundler ed un servizio dati, quindi è necessario eseguire i seguenti comandi:

`npm install`

A seguito dell'installazione troverete il server per le API dentro la cartella server, e potrete lanciarlo col comando `node server.js`. Per aggiungere o modificare entry del "db" potete modificare il json nella stessa cartella.

Per lanciare il server live utilizzando il bundler, dalla root potete usare il comando `npm run start`.

Dopodichè eseguite i seguenti compiti:

-   Installare il service worker
-   Verificare gli aggiornamenti del service worker
-   Usare i meccanismi di precaching per salvare in memoria gli assets statici della pagina.
-   Utilizzare i listener per intercettare le chiamate alle risorse e salvare secondo una strategia "stale-while-revalidate"
-   BONUS: Gestire una notifica del client.
-   BONUS: Gestire una notifica push.
-   BONUS: Gestire un background-sync
