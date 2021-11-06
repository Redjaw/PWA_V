import Handlebars from "handlebars"

$('.games').hide()

function renderGames(games) {
    $('.loading').hide();
    var template = $('.games').html();
    var templateScript = Handlebars.compile(template);

    var context = games;
    var html = templateScript({ games: context });

    $('.games').html(html);
    $('.games').show();
}

function getGames() {
    fetch('http://localhost:3000/games')
    .then((response) => response.json())
    .then(data => {
        renderGames(data)
    })
    .catch(error=>{
        renderGames([])
    })
}

getGames()
