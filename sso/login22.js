// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwLz4xTWaJ-3vVkAm4-14MZuNtxmTea7A",
    authDomain: "anwr-login.firebaseapp.com",
    projectId: "anwr-login",
    storageBucket: "anwr-login.appspot.com",
    messagingSenderId: "686366789818",
    appId: "1:686366789818:web:8e4322533cf1c18b687283"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login with Google function
function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect to m.html after successful login
      window.location.href = "/m.html";
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
}
