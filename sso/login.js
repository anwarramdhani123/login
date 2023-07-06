// Firebase configuration
var firebaseConfig = {
  // Konfigurasi Firebase Anda di sini
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login function
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      // Redirect to m.html after successful login
      window.location.href = "/m.html";
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
}
