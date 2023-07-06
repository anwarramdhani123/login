// Firebase configuration
var firebaseConfig = {
  // Konfigurasi Firebase Anda di sini
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Cek status login setiap kali halaman dimuat
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    // Jika pengguna belum login, redirect ke halaman login
    redirectToLogin();
  }
});

// Simpan URL halaman asal saat mengarahkan pengguna ke halaman login
function redirectToLogin() {
  var currentUrl = window.location.href;
  sessionStorage.setItem("redirectUrl", currentUrl);
  window.location.href = "/sso/login22.html";
}

// Logout function
function logout() {
  firebase.auth().signOut()
    .then(function() {
      // Redirect to login page after successful logout
      redirectToLogin();
    })
    .catch(function(error) {
      alert("Error: " + error.message);
    });
}
