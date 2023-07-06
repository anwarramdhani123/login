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

// Logout function
function logout() {
  firebase.auth().signOut()
    .then(function() {
      // Redirect to login page after successful logout
      window.location.href = "/login.html";
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
}
