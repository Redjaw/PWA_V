import Handlebars from "handlebars"
import Dexie from "dexie";
import localforage from "localforage";

localforage.setItem('test','ciao')

var db = new Dexie("MyDexieDatabase");
db.version(1).stores({
    dexieposts: "id",
});

async function getData() {
    var items =  await db.dexieposts.toArray()
    if (items.length > 0) {
        renderPosts(items)
    }else getPosts()
}
getData()

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
        localforage.setItem('posts',data)
        db.dexieposts.bulkAdd(data)
       

    })
}


