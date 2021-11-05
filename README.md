# PWA_V

## Esercitazione 3: IndexedDB

In questa esercitazione sarà necessario utilizzare indexedDB per salvare in memoria le risposte dal servizio dati.

Per questa esercitazione verranno utilizzati un bundler ed un servizio dati, quindi è necessario eseguire i seguenti comandi:

`npm install`

A seguito dell'installazione troverete il server per le API dentro la cartella server, e potrete lanciarlo col comando `node server.js`. Per aggiungere o modificare entry del "db" potete modificare il json nella stessa cartella.

Per lanciare il server live utilizzando il bundler, dalla root potete usare il comando `npm run start`.

Dopodichè eseguite i seguenti compiti:

-   Gestire le chiamate REST da /post in modo da salvarle in indexedDB
-   Provare a recuperare le informazioni da indexedDB per evitare una chiamata REST
-   BONUS: Usare un indice per effettuare una query sui post salvati per utente.
-   BONUS: usare un cursore per eliminare i post dopo il 4.
