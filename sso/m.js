// Firebase configuration
var firebaseConfig = {
  // Konfigurasi Firebase Anda di sini
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
