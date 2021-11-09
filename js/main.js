Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('../sw.js').then(function (registration) {
        return registration.sync.register('myFirstSync');

    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
function sendMessage(){
 navigator.serviceWorker.controller.postMessage({
     type: 'MESSAGE_IDENTIFIER',
     data: "test"
 });
}
    

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

