// Firebase configuration
var firebaseConfig = {
  // Konfigurasi Firebase Anda di sini
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Register with Google function
function registerWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect to m.html after successful registration
      window.location.href = "/m.html";
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
}
