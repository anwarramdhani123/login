// Firebase configuration
var firebaseConfig = {
  // Konfigurasi Firebase Anda di sini
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Register function
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then```
function(user) {
      // Redirect to m.html after successful registration
      window.location.href = "/m.html";
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
}
