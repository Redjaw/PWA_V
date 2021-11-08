import Handlebars from "handlebars"
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs  } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAwP8lby5otVEsgXgS3S77yydXgosYETJM",
    authDomain: "pwa-test-5330c.firebaseapp.com",
    projectId: "pwa-test-5330c",
    storageBucket: "pwa-test-5330c.appspot.com",
    messagingSenderId: "677950617870",
    appId: "1:677950617870:web:4ce6873444d908e3cb3f5f",
    measurementId: "G-FJZTKTW89V"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then(async (result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "post"));
    querySnapshot.forEach((doc) => {
        console.log('author',doc.data().author);
    });
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

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
