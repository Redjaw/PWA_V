
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            console.log("notifiche accettate");
        }
    });

$('.games').hide()
let gamesList;

function renderGames(games) {
    $('.loading').hide();

    var list = "";
        for(let i=0; i<games.length; i++){
        list += `<div class="game" index="${i}">
                    <span><i class="fas fa-caret-right"></i>${games[i].title}</span>
                    <i class="${games[i].icon} fa-2x"></i>
                </div>`
        }
    $(".games").append(list);
    $(".game").each(function(){
        $(this).click(function(){
            $(".games").html(`<img src="${gamesList[$(this).attr('index')].img}" />`)
        })
    })
    $('.games').show();
}

function getGames() {
    fetch('http://localhost:3000/games')
    .then((response) => response.json())
    .then(data => {
        renderGames(data)
        gamesList = data
    })
    .catch(error=>{
        renderGames([])
    })
}

getGames()
