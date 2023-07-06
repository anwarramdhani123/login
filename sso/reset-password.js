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

// Reset password function
function resetPassword() {
  var email = document.getElementById("email").value;

  firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
      alert("Email sent. Please check your inbox to reset your password.");
      // Redirect to login page after successful password reset
      window.location.href = "/login.html";
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
}
