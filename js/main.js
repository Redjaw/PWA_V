import Handlebars from "handlebars"

function renderPosts(posts) {
    $('#loading').hide();
    var template = $('.mainTweetList').html();
    var templateScript = Handlebars.compile(template);

    var context = posts;
    var html = templateScript({ posts: context });

    $('.mainTweetList').html(html);
}

function getPosts() {
    fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then(data => {
        
        renderPosts(data)

    })
}

getPosts()
