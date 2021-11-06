# PWA_V

## Esercitazione 5: workbox

In questa esercitazione sarà necessario utilizzare workbox per raggiungere i risultati della scorsa esercitazione.

Per questa esercitazione verranno utilizzati un bundler ed un servizio dati, quindi è necessario eseguire i seguenti comandi:

`npm install`

A seguito dell'installazione troverete il server per le API dentro la cartella server, e potrete lanciarlo col comando `node server.js`. Per aggiungere o modificare entry del "db" potete modificare il json nella stessa cartella.

Per lanciare il server live utilizzando il bundler, dalla root potete usare il comando `npm run start`.

Dopodichè eseguite i seguenti compiti:

-   Installare il service worker
-   Verificare gli aggiornamenti del service worker (attenzione ai refresh di parcel)
-   Usare i meccanismi di precaching per salvare in memoria gli assets statici della pagina.
-   Utilizzare i listener per intercettare le chiamate alle risorse e salvare secondo una strategia "stale-while-revalidate" o "network-first"
-   BONUS: Gestire un background-sync (questo sarà difficile da replicare per via del funzionamento automatico)

Attenzione: per indicare a parcel dove sarà il service-worker utilizzare il formalismo `navigator.serviceWorker.register( new URL('../service-worker.js', import.meta.url), {type: 'module'})`
